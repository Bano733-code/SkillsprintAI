from utils import ask_ai

def skill_gap_analysis(
    resume_text,
    target_role
):

    prompt = f"""
    Compare this resume against the target role.

    Target Role:
    {target_role}

    Resume:
    {resume_text}

    Return:
    1. Existing Skills
    2. Missing Skills
    3. Priority Skills
    4. Learning Order
    """

    return ask_ai(prompt)