import { FolderGit2 } from "lucide-react";

function ProjectCard({ projects }) {
  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-full bg-blue-100 p-3">
          <FolderGit2
            className="text-blue-600"
            size={28}
          />
        </div>

        <h2 className="text-3xl font-bold">
          AI Project Suggestions
        </h2>

      </div>

      <div className="rounded-2xl bg-gray-50 p-6">

        <div className="whitespace-pre-wrap leading-8 text-gray-700">

          {projects}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;