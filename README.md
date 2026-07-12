# 🚀 SkillSprintAI

## AI-Powered Career Development Assistant

SkillSprintAI is an AI-powered career assistant designed to help students and professionals improve their career journey using Large Language Models (LLMs).

The platform analyzes resumes, identifies skill gaps, creates personalized learning roadmaps, generates AI-based interview questions, evaluates interview performance, suggests projects, and provides career guidance through an AI chatbot.

SkillSprintAI acts as a personal AI career mentor that helps users understand where they are, where they want to go, and what steps they need to take to reach their goals.

---

# ✨ Features

## 📄 AI Resume Analysis

Upload your resume and get AI-powered analysis.

Features:

- Resume text extraction from PDF
- Skill identification
- Strength analysis
- Weakness detection
- Career improvement suggestions


---

## 🎯 Skill Gap Analysis

Identify missing skills required for your target career role.

The system analyzes:

- Current resume skills
- Target job role
- Required technical knowledge

and provides recommendations to improve your profile.


---

## 🛣️ Personalized Learning Roadmap

Generate a customized learning roadmap based on:

- Current skill level
- Target role
- Career objectives

The roadmap helps users understand:

- What to learn
- Which technologies to focus on
- Recommended learning sequence


---

## 🤖 AI Interview Practice

Practice realistic technical interviews with AI.

Features:

- Role-based interview generation
- Increasing difficulty levels
- Technical questions
- Problem-solving questions
- System design questions
- Behavioral questions
- AI-generated interview feedback


Supported roles:

- AI Engineer
- Machine Learning Engineer
- Data Scientist
- Backend Developer
- Frontend Developer
- Software Engineer
- DevOps Engineer


---

## 💡 AI Project Generator

Generate project ideas based on your selected career path.

The AI recommends projects that help users:

- Build portfolios
- Improve practical skills
- Prepare for industry roles


---

## 💬 Career AI Chatbot

Get instant career guidance from an AI assistant.

Users can ask about:

- Learning strategies
- Technologies
- Career paths
- Interview preparation
- Project ideas


---

# 🏗️ System Architecture

```
                User
                  |
                  |
          React Frontend
                  |
                  |
              FastAPI
                  |
    -----------------------------
    |             |             |

   Resume AI   Interview AI   Career AI
                   |
                   |
               Groq LLM

```

---

# 🛠️ Tech Stack


## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Lucide React


## Backend

- Python
- FastAPI
- Pydantic
- PDFPlumber
- Uvicorn


## Artificial Intelligence

- Large Language Models (LLMs)
- Groq API


## Deployment

Frontend:

- Vercel


Backend:

- Render / Railway


---

# 📂 Project Structure

```

SkillSprintAI
│
├── backend
│ │
│ ├── main.py
│ ├── interview.py
│ ├── resume.py
│ ├── roadmap.py
│ ├── projects.py
│ ├── skill_gap.py
│ ├── chat.py
│ ├── utils.py
│ ├── models.py
│ ├── requirements.txt
│ └── .env
│
│
└── frontend
│
├── src
│ │
│ ├── components
│ ├── pages
│ ├── context
│ └── services
│
├── package.json
└── .env

```
---

# ⚙️ Local Installation


## 1. Clone Repository


```bash
git clone https://github.com/Bano733-code/SkillSprintAI.git

cd SkillSprintAI
Backend Setup

Navigate to backend:

cd backend

Create virtual environment:

python -m venv venv

Activate environment:

Windows
venv\Scripts\activate
Linux / Mac
source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Create .env file:

GROQ_API_KEY=your_groq_api_key

Run backend server:

uvicorn main:app --reload

Backend will run at:

http://localhost:8000

API documentation:

http://localhost:8000/docs
Frontend Setup

Open another terminal:

cd frontend

Install dependencies:

npm install

Create .env file:

VITE_API_URL=http://localhost:8000

Start frontend:

npm run dev

Frontend will run at:

http://localhost:5173
🔌 API Endpoints
Endpoint	Method	Description
/upload-resume	POST	Upload resume PDF
/analyze-resume	POST	Analyze resume
/skill-gap-analysis	POST	Find skill gaps
/roadmap	POST	Generate learning roadmap
/interview-questions	POST	Generate AI interview questions
/evaluate-interview	POST	Evaluate interview answers
/generate-projects	POST	Generate project ideas
/career-chat	POST	AI career assistant
🚀 Deployment
Backend Deployment (Render)

Steps:

Connect GitHub repository with Render
Select backend directory

Build command:

pip install -r requirements.txt

Start command:

uvicorn main:app --host 0.0.0.0 --port 10000

Environment Variables:

GROQ_API_KEY=your_api_key
Frontend Deployment (Vercel)

Steps:

Import GitHub repository
Select frontend directory

Install command:

npm install

Build command:

npm run build

Environment variable:

VITE_API_URL=https://your-backend-url.com
🔐 Environment Variables

Backend:

GROQ_API_KEY=

Frontend:

VITE_API_URL=

Never commit .env files to GitHub.

🔮 Future Improvements
Authentication
User registration
Login system
JWT authentication
AI Memory
Store previous conversations
Track learning progress
Personalized recommendations
Interview Improvements
Voice-based interviews
Real-time evaluation
Interview history
Career Features
Job recommendation system
LinkedIn profile analysis
Resume optimization
Advanced AI
Vector database integration
RAG-based career assistant
Multi-agent AI system


👩‍💻 Author

Bano Rani

Bioinformatics Student

AI & Machine Learning Enthusiast

⭐ Acknowledgements

Built using:

FastAPI
React
Tailwind CSS
Groq AI

📜 License

This project is developed for educational and research purposes.

After adding this file:

```bash
git add README.md
git commit -m "Added professional README documentation"
git push origin main
