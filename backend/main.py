from fastapi import FastAPI
from pydantic import BaseModel
import requests

class Promt(BaseModel):
    text: str
    token: str

app = FastAPI()

@app.get("/")
async def root():
    #chat gpt ye promt gönder

    mails = []
    soru = "soru"


    answer = "cevap"
    return {
        "answer": answer,
        "question": soru,
        "mails": mails,
        "token": "token"
        }


@app.get("/promt")
async def root(promt: Promt):
    token = promt.token
    # token kullanarak microsoft graph api ile mailleri çek
    
    mails = requests.get("https://graph.microsoft.com/v1.0/me/messages", headers={
        "Authorization": "Bearer " + token,
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Prefer": "outlook.body-content-type='text'"
        })
    mails = mails.json()
    mails = mails["value"]
    # mailleri tek tek dolaşarak içeriklerini çek
    return mails

