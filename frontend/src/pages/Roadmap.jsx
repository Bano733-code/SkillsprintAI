import { useState } from "react";
import { Loader2 } from "lucide-react";

import { useResume } from "../context/ResumeContext";
import { generateRoadmap } from "../services/api";

import RoadmapCard from "../components/roadmap/RoadmapCard";

function Roadmap() {
  const {
    resumeText,
    targetRole,
  } = useResume();

  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateRoadmap = async () => {

    if (!resumeText) {
      alert("Please upload your resume first.");
      return;
    }

    if (!targetRole) {
      alert("Please select your target role first.");
      return;
    }

    try {

      setLoading(true);

      const data = await generateRoadmap(
        resumeText,
        targetRole
      );

      setRoadmap(data.roadmap);

    } catch (error) {

      console.error(error);

      alert("Failed to generate roadmap.");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-gray-50 py-20">

      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-center text-4xl font-bold">
          AI Career Roadmap
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Generate a personalized learning roadmap based on your resume.
        </p>

        <div className="mt-8 rounded-2xl bg-blue-50 p-6">

          <p className="font-semibold text-blue-700">
            Resume:
            {resumeText
              ? " ✅ Uploaded"
              : " ❌ Not Uploaded"}
          </p>

          <p className="mt-2 font-semibold text-blue-700">
            Target Role:
            {targetRole || " Not Selected"}
          </p>

        </div>

        <button
          onClick={handleGenerateRoadmap}
          disabled={loading}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={18} />
              Generating...
            </span>
          ) : (
            "Generate Roadmap"
          )}
        </button>

        {roadmap && (
          <RoadmapCard roadmap={roadmap} />
        )}

      </div>

    </div>

  );
}

export default Roadmap;