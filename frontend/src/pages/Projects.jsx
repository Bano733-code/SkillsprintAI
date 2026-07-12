import { useState } from "react";
import { Loader2 } from "lucide-react";

import { useResume } from "../context/ResumeContext";
import { generateProjects } from "../services/api";

import ProjectCard from "../components/projects/ProjectCard";

function Projects() {

  const {
    targetRole,
    setTargetRole,
    projects,
    setProjects,
    resumeText,
  } = useResume();

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {

    if (!resumeText) {
      alert("Please upload your resume first.");
      return;
    }

    if (!targetRole) {
      alert("Please select a target role.");
      return;
    }

    try {

      setLoading(true);

      const data = await generateProjects(targetRole);

      setProjects(data.projects);

    } catch (error) {

      console.error(error);

      alert("Unable to generate projects.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-4xl font-bold">
          AI Project Generator
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Generate portfolio projects tailored to your career goal.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-4">

          <p className="font-medium text-blue-700">

            {resumeText
              ? "✅ Resume detected successfully."
              : "⚠️ Please upload your resume first."}

          </p>

        </div>

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">

          <label className="font-semibold">
            Target Role
          </label>

          <select
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            className="mt-3 w-full rounded-xl border p-3"
          >

            <option value="">Select Role</option>

            <option>AI Engineer</option>
            <option>Machine Learning Engineer</option>
            <option>Data Scientist</option>
            <option>Backend Developer</option>
            <option>Frontend Developer</option>
            <option>Software Engineer</option>
            <option>Cloud Engineer</option>

          </select>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >

            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Generating...
              </span>
            ) : (
              "Generate Projects"
            )}

          </button>

        </div>

        {projects && (
          <ProjectCard projects={projects} />
        )}

      </div>

    </div>

  );
}

export default Projects;