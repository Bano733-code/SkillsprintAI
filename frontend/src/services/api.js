import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/upload-resume", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
export default api;

export const analyzeResume = async (resumeText, targetRole) => {
  const response = await api.post("/analyze-resume", {
    resume_text: resumeText,
    target_role: targetRole,
  });

  return response.data;
};
export const getSkillGap = async (
  resumeText,
  targetRole
) => {

  const response = await api.post(
    "/skill-gap-analysis",
    {
      resume_text: resumeText,
      target_role: targetRole,
    }
  );

  return response.data;
};
export const generateRoadmap = async (resumeText, targetRole) => {
  const response = await api.post("/roadmap", {
    resume_text: resumeText,
    target_role: targetRole,
  });

  return response.data;
};
export const generateProjects = async (role) => {

  const response = await api.post("/generate-projects", {
    role,
  });

  return response.data;
};
export const generateInterview = async (role) => {

  const response = await api.post("/interview-questions", {
    role,
  });

  return response.data;
};

export const evaluateInterview = async (
  role,
  questions_answers
) => {

  const response = await api.post("/evaluate-interview", {
    role,
    questions_answers
  });

  return response.data;
};
export const careerChat = async (message) => {

  const response = await api.post("/career-chat", {
    message,
  });

  return response.data;

};