import pdfplumber
import fitz  # PyMuPDF
import easyocr
import os
from PIL import Image

reader = easyocr.Reader(['en'], gpu=False)


def extract_text(file_path):
    """
    Try pdfplumber first.
    If no text is found, use OCR.
    """

    extracted_text = ""

    # -------- Method 1: PDF Text --------
    try:
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    extracted_text += text + "\n"
    except Exception:
        pass

    if extracted_text.strip():
        return extracted_text

    # -------- Method 2: OCR --------

    doc = fitz.open(file_path)

    for page_number, page in enumerate(doc):

        pix = page.get_pixmap(dpi=300)

        image_path = f"uploads/page_{page_number}.png"

        pix.save(image_path)

        result = reader.readtext(image_path, detail=0)

        extracted_text += "\n".join(result)

        os.remove(image_path)

    return extracted_text