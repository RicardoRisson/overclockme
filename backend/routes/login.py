from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

user_sessions = {}

class LoginData(BaseModel):
    name: str
    api_key: str

@router.post("/login")
async def login(data: LoginData):
    user_sessions[data.name] = data.api_key
    return {"message": f"User {data.name} logged in successfully."}

@router.get("/apikey/{username}")
async def get_api_key(username: str):
    api_key = user_sessions.get(username)
    if not api_key:
        raise HTTPException(status_code=404, detail="User not found")
    return {"api_key": api_key}
