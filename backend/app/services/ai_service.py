import os
import json
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def analyze_medical_report(report_text):

    prompt = f"""
You are an expert medical AI assistant.

Analyze the following medical report.

Return ONLY a valid JSON object.

Do not write markdown.
Do not use ```json.
Do not add any explanation outside the JSON.

Use this exact format:

{{
    "summary": "...",
    "abnormal_values": [
        "...",
        "..."
    ],
    "possible_health_risks": [
        "...",
        "..."
    ],
    "recommendations": [
        "...",
        "..."
    ]
}}

Medical Report:

{report_text}
"""

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.2,
        )

        result = response.choices[0].message.content

        return json.loads(result)

    except Exception as e:
        return {
            "summary": "Analysis failed.",
            "abnormal_values": [],
            "possible_health_risks": [],
            "recommendations": [],
            "error": str(e)
        }