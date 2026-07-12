import {
  BookOpen,
  CheckCircle
} from "lucide-react";

function RoadmapCard({ roadmap }) {

  return (

    <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-full bg-blue-100 p-4">
          <BookOpen
            className="text-blue-600"
            size={32}
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Your AI Learning Roadmap
          </h2>

          <p className="text-gray-500">
            Personalized roadmap generated from your resume.
          </p>

        </div>

      </div>

      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">

        <div className="flex items-start gap-3">

          <CheckCircle
            className="mt-1 text-green-600"
            size={22}
          />

          <div className="whitespace-pre-wrap leading-8 text-gray-700">

            {roadmap}

          </div>

        </div>

      </div>

    </div>

  );

}

export default RoadmapCard;