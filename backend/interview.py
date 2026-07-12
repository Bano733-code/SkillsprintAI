from utils import ask_ai


def generate_questions(role):
    """
    Generate exactly five interview questions for the selected role.
    """

    prompt = f"""
You are a Senior {role} interviewer.

Generate EXACTLY 5 interview questions.

Requirements:

- Questions must increase in difficulty.
- Do NOT include answers.
- Do NOT include explanations.
- Return ONLY the questions.
- Number them from 1 to 5.

Question Types:

1. Fundamentals
2. Practical implementation
3. Problem solving
4. System design (if applicable)
5. Behavioral / Scenario based

Example format:

1. What is...?
2. Explain...?
3. How would you...?
4. Design...?
5. Tell me about...?
"""

    return ask_ai(prompt)


def evaluate_interview(role, questions_answers):
    """
    Evaluate the complete interview after all questions have been answered.
    """

    prompt = f"""
You are a Senior {role} interviewer.

The following contains the interview questions and the candidate's answers.

{questions_answers}

Evaluate the COMPLETE interview.

Provide your response in the following format.

# Overall Score
Score: __/10

# Technical Knowledge

# Communication Skills

# Problem Solving

# Strengths
- ...
- ...
- ...

# Weaknesses
- ...
- ...
- ...

# Areas for Improvement
- ...
- ...
- ...

# Hiring Recommendation
(Hire / Consider / Reject)

# Final Advice

Give constructive and detailed feedback that helps the candidate improve.
"""

    return ask_ai(prompt)