from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.pdf_services import extract_text
from app.services.ai_service import analyze_medical_report

router = APIRouter()


@router.post("/upload")
async def upload_report(file: UploadFile = File(...)):

    upload_folder = "uploads"
    os.makedirs(upload_folder, exist_ok=True)

    file_path = os.path.join(upload_folder, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = extract_text(file_path)

    analysis = analyze_medical_report(extracted_text)

    return {
        "filename": file.filename,
        "message": "PDF uploaded successfully",
        "extracted_text": extracted_text,
        "analysis": analysis
    }