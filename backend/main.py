from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import login, prompt, timeslots

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(login.router)
app.include_router(prompt.router)
app.include_router(timeslots.router)
