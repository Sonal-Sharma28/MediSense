from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.upload import router as upload_router
from app.routes.auth import router as auth_router

app = FastAPI(
    title="MediSense API",
    version="1.0.0",
    description="AI Medical Report Analyzer Backend"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)
app.include_router(auth_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to MediSense API 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "Backend Running Successfully ✅"
    }