from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.assets import Assets
from src.chat import Chat
from datetime import *

app = FastAPI()
assets = Assets()
chat = Chat(assets=assets,model_name="ggml-model-gpt4all-falcon-q4_0.bin")

origins = ["*"]

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    user_id: str
    token: str
    question: str
    expire_time: datetime | None 


@app.post("/chat")
async def chat_session(user: User):
    return chat.chat(user.question,user.token,user.user_id, user.expire_time)