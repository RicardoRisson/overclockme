from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# Armazenamento em memória dos prompts (temporário)
user_prompts = {}

class PromptData(BaseModel):
    name: str
    prompt: str

@router.post("/prompt")
async def save_prompt(data: PromptData):
    user_prompts[data.name] = data.prompt
    return {"message": f"Prompt for '{data.name}' saved successfully."}

@router.get("/prompt/{username}")
async def get_prompt(username: str):
    prompt = user_prompts.get(username)
    if prompt is None:
        raise HTTPException(status_code=404, detail="Prompt not found")
    return {"prompt": prompt}
