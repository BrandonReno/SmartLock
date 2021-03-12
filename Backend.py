from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel # pylint: disable=no-name-in-module
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",
]



class User(BaseModel):
    name: Optional[str] = None
    lock: bool

MockDB = [User(name="Brandon Reno", lock = True)]

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
    if MockDB[-1].lock:
        return {str(MockDB[-1].lock)}
    return {str(MockDB[-1].lock)}

@app.get("/past")
def get_Past_Opens():
    return MockDB

@app.post("/status")
def Toggle_Lock(Name : Optional[str] = None):
    Last_User = MockDB[-1]
    New_User = User(name = Name, lock= not Last_User.lock)
    MockDB.append(New_User)
    return New_User
       
