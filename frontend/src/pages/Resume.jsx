import UploadCard from "../components/resume/UploadCard";

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-12 text-center text-5xl font-bold">
          Resume Analysis
        </h1>

        <UploadCard />

      </div>

    </div>
  );
}

export default Resume;