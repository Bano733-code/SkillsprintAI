from pydantic import BaseModel

class ResumeRequest(BaseModel):
    resume_text: str
    target_role: str

class InterviewRequest(BaseModel):
    role: str

class EvaluationRequest(BaseModel):
    question: str
    answer: str

class ProjectRequest(BaseModel):
    role: str

class SkillGapRequest(BaseModel):
    resume_text: str
    target_role: str

class ChatRequest(BaseModel):
    message: str