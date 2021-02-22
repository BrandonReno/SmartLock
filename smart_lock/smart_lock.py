from typing import Optional
from datetime import datetime
from fastapi import FastAPI
from pydantic import BaseModel # pylint: disable=no-name-in-module
import uvicorn

class User(BaseModel):
    name: str
    lock: bool

#MockDB = []
#Lock_Status = False

app = FastAPI()

@app.get("/status")
def get_Lock_Status():
    return Lock_Status

@app.post("/status")
def Toggle_Lock(Current_User : User):
    global Lock_Status
    Lock_Status = Current_User.lock
    MockDB.append(Current_User.dict())
    return MockDB[-1]

    
def main():
    print("in main!")
    uvicorn.run("smart_lock.smart_lock:app", reload=True)

if __name__ == "__main__":
    main()
