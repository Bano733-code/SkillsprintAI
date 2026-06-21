from fastapi import FastAPI, UploadFile, File
import pdfplumber
import io

from models import *

from resume import analyze_resume
from roadmap import generate_roadmap
from interview import (
    generate_question,
    evaluate_answer
)
from projects import generate_projects
from skill_gap import skill_gap_analysis
from chat import career_chat
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="SkillSprintAI API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...)
):
    pdf_bytes = await file.read()

    text = ""

    with pdfplumber.open(
        io.BytesIO(pdf_bytes)
    ) as pdf:

        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text

    return {
       "success": True,
       "resume_text": text
}
@app.post("/analyze-resume")
def resume_endpoint(
    data: ResumeRequest
):

    result = analyze_resume(
        data.resume_text,
        data.target_role
    )

    return {
        "success": True,
        "analysis": result
    }
@app.post("/skill-gap-analysis")
def skill_gap_endpoint(
    data: SkillGapRequest
):
        
    result=skill_gap_analysis(
            data.resume_text,
            data.target_role
        )
    return {
        "success": True,
        "skill_gap": result
    }
@app.post("/roadmap")
def roadmap_endpoint(
    data: ResumeRequest
):

    result = generate_roadmap(
        data.resume_text,
        data.target_role
    )

    return {
        "success": True,
        "roadmap": result
    }
@app.post("/interview-question")
def interview_question_endpoint(
    data: InterviewRequest
):

    result = generate_question(
        data.role
    )

    return {
        "success": True,
        "question": result
    }
@app.post("/evaluate-answer")
def evaluate_answer_endpoint(
    data: EvaluationRequest
):
    result= evaluate_answer(
            data.question,
            data.answer
        )
    return {
        "success": True,
        "feedback": result
    }
    
@app.post("/generate-projects")
def projects_endpoint(
    data: ProjectRequest
):
    result = generate_projects(
        data.role
    )
    return {
        "success": True,
        "projects": result
}

@app.post("/career-chat")
def career_chat_endpoint(
    data: ChatRequest
):

    result = career_chat(
        data.message
    )

    return {
        "success": True,
        "response": result
    }
