from utils import ask_ai

def generate_question(role):

    prompt = f"""
    Act as a Senior {role} interviewer.

    Ask ONE interview question.
    """

    return ask_ai(prompt)


def evaluate_answer(question, answer):

    prompt = f"""
    Question:
    {question}

    Candidate Answer:
    {answer}

    Evaluate:
    - Score out of 10
    - Strengths
    - Weaknesses
    - Improved Answer
    """

    return ask_ai(prompt)