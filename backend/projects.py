from utils import ask_ai

def generate_projects(role):

    prompt = f"""
    Suggest 5 portfolio projects.

    Role:
    {role}

    Include:
    - Difficulty
    - Tech Stack
    - Description
    """

    return ask_ai(prompt)