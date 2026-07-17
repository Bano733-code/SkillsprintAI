from unittest import result
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber
import io
from models import *
from resume import analyze_resume
from roadmap import generate_roadmap
from interview import (
    generate_questions,
    evaluate_interview
)
from projects import generate_projects
from skill_gap import skill_gap_analysis
from chat import career_chat

app = FastAPI(
    title="SkillSprintAI API"
)

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================================================
# Upload Resume
# ======================================================

@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    pdf_bytes = await file.read()

    text = ""

    with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:

        for page in pdf.pages:

            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return {
        "success": True,
        "resume_text": text
    }


# ======================================================
# Resume Analysis
# ======================================================

@app.post("/analyze-resume")
def analyze_resume_endpoint(data: ResumeRequest):

    result = analyze_resume(
        data.resume_text,
        data.target_role
    )

    return {
        "success": True,
        "analysis": result
    }


# ======================================================
# Skill Gap
# ======================================================

@app.post("/skill-gap-analysis")
def skill_gap_endpoint(data: SkillGapRequest):

    result = skill_gap_analysis(
        data.resume_text,
        data.target_role
    )

    return {
        "success": True,
        "skill_gap": result
    }


# ======================================================
# Learning Roadmap
# ======================================================

@app.post("/roadmap")
def roadmap_endpoint(data: ResumeRequest):

    result = generate_roadmap(
        data.resume_text,
        data.target_role
    )

    return {
        "success": True,
        "roadmap": result
    }


# ======================================================
# Interview Questions
# ======================================================

@app.post("/interview-questions")
def interview_questions_endpoint(data: InterviewRequest):
    
    result=questions = generate_questions(data.role)
    questions = []

    for line in result.split("\n"):

        line = line.strip()

        if line:
            questions.append(line)

    return {
        "success": True,
        "questions": questions
    }


# ======================================================
# Evaluate Interview Answer
# ======================================================

@app.post("/evaluate-interview")
def evaluate_interview_endpoint(data: EvaluationRequest):

    feedback = evaluate_interview(
        data.role,
        data.questions_answers
    )

    return {
        "success": True,
        "feedback": feedback
    }


# ======================================================
# AI Project Generator
# ======================================================

@app.post("/generate-projects")
def projects_endpoint(data: ProjectRequest):

    result = generate_projects(
        data.role
    )

    return {
        "success": True,
        "projects": result
    }


# ======================================================
# Career Chatbot
# ======================================================

@app.post("/career-chat")
def career_chat_endpoint(data: ChatRequest):

    result = career_chat(
        data.message
    )

    return {
        "success": True,
        "response": result
    }
@app.get("/")
def root():
    return {"status": "Backend is running"}

