from utils import ask_ai

def career_chat(message):

    prompt = f"""
    You are SkillSprintAI.

    A professional career coach.

    User:
    {message}

    Give practical career advice.
    """

    return ask_ai(prompt)