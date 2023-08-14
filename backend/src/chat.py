import os 
from gpt4all import GPT4All
import requests
from datetime import *
import json

from langchain.vectorstores import Chroma
from langchain.embeddings import GPT4AllEmbeddings
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter


class Chat:
    def __init__(self,assets,model_name="ggml-vicuna-13b-1.1-q4_2.bin") -> None:
        self.stop_words = assets.get_stopwords()
        self.assets = assets
        self.promt_tamplate = """
Please use the following mails to answer questions.
Context: {context}
- -
Question: {question}

"""
        if not os.path.exists("models/"+model_name):
            GPT4All.download_model(model_filename=model_name,model_path="models")
        self.model = GPT4All(model_name=model_name,model_path="models")
        self.embeddings = GPT4AllEmbeddings()
        
    def get_context(self,question, mail_count=2,folder_path='mails'):
       
# 1. Metin belgelerini yükleyin ve içeriğini alın
        file_names = os.listdir(folder_path)
        file_paths = [folder_path+"/"+file_name for file_name in file_names]
        file_paths
        data = []
        for file_path in file_paths:
            loader = TextLoader(file_path=file_path)
            data.append(loader.load()[0])
            
       

        text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=0)
        all_splits = text_splitter.split_documents(data)

        vectorstore = Chroma.from_documents(documents=all_splits, embedding=self.embeddings)

        docs = vectorstore.similarity_search(question.lower(), top_k=2)
        context = ""

        for doc in docs:
            context += "-------------mail----------------\n"
            context += doc.page_content[:1000]
            context += "\n\n"

        return context

    
    def has_chat_session(self,user_id):
        return os.path.exists("mails/"+user_id)


    def create_chat_session(self,user_id,token):
        if not os.path.exists("mails/"+user_id):
            os.mkdir("mails/"+user_id)
        mails = requests.get("https://graph.microsoft.com/v1.0/me/messages", headers={
                "Authorization": "Bearer " + token,
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Prefer": "outlook.body-content-type='text'"
                },
                params={"$top": 100})
        mails = mails.json()

        with open("mails/"+user_id+"/mails.json", "w+") as file:
            file.write(json.dumps(mails))


        mails = mails["value"]
        for mail in mails:
            try:
                sender_name = mail["from"]["emailAddress"]["name"]
                sender_mail = mail["from"]["emailAddress"]["address"]
                subject = mail["subject"]
                rec_datetime = datetime.strptime(mail["receivedDateTime"], "%Y-%m-%dT%H:%M:%SZ")
                rec_day = datetime.now() - rec_datetime
                if rec_day == timedelta(days=0):
                    time_label = "To day"
                elif rec_day == timedelta(days=1):
                    time_label = "Last day"
                elif rec_day < timedelta(days=7):
                    time_label = "Last week"
                else:
                    time_label = "Old"
                bodyPreview = mail["bodyPreview"].replace("\n","").replace("\r","")
                mail_to_save_str = f"""Sender Name: {sender_name}
Sender Mail: {sender_mail}
Subject: {subject}
When: {time_label}
Received DateTime: {rec_datetime}
BodyPreview: {bodyPreview}
""" 
                with open("mails/"+user_id+"/"+mail["id"]+".txt", "w+") as file:
                    file.write(mail_to_save_str)
            except Exception as e:
                print(e)
                continue
        expire_time = datetime.now() + timedelta(hours=1)
        return expire_time

    def chat(self,question,token,user_id,expire_time):
        current_time = datetime.now(timezone.utc)
        new_expire_time = ""
        if not self.has_chat_session(user_id):
            new_expire_time = self.create_chat_session(user_id,token)
        if expire_time is None or current_time >= expire_time:
            print("session expired")
            new_expire_time = self.create_chat_session(user_id,token)
        context = self.get_context(question, mail_count=2,folder_path="mails/"+user_id)
        if context == "":
            prompt = question
        else:
            prompt = self.promt_tamplate.format(context=context, question=question)
        print(prompt)
        response = self.model.generate(prompt=prompt, max_tokens=2048)
        return {
                "answer":response,
                "expire_time":new_expire_time
            }
        
        