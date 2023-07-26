from fastapi import FastAPI
from pydantic import BaseModel
import requests
from fastapi.middleware.cors import CORSMiddleware

class Promt(BaseModel):
    prompt: str
    token: str

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/prompt")
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

