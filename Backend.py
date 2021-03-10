from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel # pylint: disable=no-name-in-module
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",
]



class User(BaseModel):
    name: str
    lock: bool

MockDB = []
Lock_Status = False

app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/status")
def get_Lock_Status():
    return Lock_Status

@app.post("/status")
def Toggle_Lock(Current_User : User):
    global Lock_Status
    Lock_Status = Current_User.lock
    MockDB.append(Current_User.dict())
    return MockDB[-1]
