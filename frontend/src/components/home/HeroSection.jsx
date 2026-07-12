import { ArrowRight, Upload } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-6xl text-center">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          🚀 AI Powered Career Development Platform
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Accelerate Your
          <span className="text-blue-600"> Career </span>
          with AI
        </h1>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Upload your resume, identify skill gaps,
          generate personalized learning roadmaps,
          discover projects, prepare for interviews,
          and receive AI-powered career guidance.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <Link
            to="/resume"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
          >
            <Upload size={20} />

            Upload Resume
          </Link>

          <a
            href="#features"
            className="flex items-center gap-2 rounded-xl border border-gray-300 px-8 py-4 text-gray-700 transition hover:bg-gray-100"
          >
            Explore Features

            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;