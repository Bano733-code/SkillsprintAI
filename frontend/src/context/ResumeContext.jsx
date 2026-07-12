import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeText, setResumeText] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [skillGap,setSkillGap]=useState(null);
  const [roadmap,setRoadmap]=useState([]);
  const [projects, setProjects] =useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState("");
  return (
    <ResumeContext.Provider
      value={{
        resumeText,
        setResumeText,
        targetRole,
        setTargetRole,
        analysis,
        setAnalysis,
        roadmap,
        setRoadmap,
        projects,
        setProjects,
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        answers,
        setAnswers,
        feedback,
        setFeedback
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}