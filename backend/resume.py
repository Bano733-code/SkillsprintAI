from utils import ask_ai

def analyze_resume(resume_text, target_role):

    prompt = f"""
    Analyze this resume for the role of {target_role}.

    Provide:
    1. Existing Skills
    2. Missing Skills
    3. Resume Score out of 100
    4. Top Improvements

    Resume:
    {resume_text}
    """

    return ask_ai(prompt)