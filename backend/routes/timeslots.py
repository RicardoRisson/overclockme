from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Dict

router = APIRouter()

user_times = {}

class TimeSlot(BaseModel):
    start: str
    end: str

class TimeSlotData(BaseModel):
    name: str
    slots: List[TimeSlot]

@router.post("/timeslots")
async def save_timeslots(data: TimeSlotData):
    user_times[data.name] = data.slots
    return {"message": "Time slots saved successfully."}

@router.get("/timeslots/{username}")
async def get_timeslots(username: str):
    slots = user_times.get(username)
    if not slots:
        raise HTTPException(status_code=404, detail="No time slots found")
    return {"slots": slots}
