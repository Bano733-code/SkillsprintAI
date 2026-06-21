from utils import ask_ai

def generate_roadmap(resume_text, target_role):

    prompt = f"""
    Create a detailed 12-week learning roadmap.

    Target Role:
    {target_role}

    Resume:
    {resume_text}

    Include:
    - Weekly goals
    - Resources
    - Projects
    """

    return ask_ai(prompt)