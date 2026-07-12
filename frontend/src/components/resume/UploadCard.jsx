import { useRef, useState } from "react";
import { Upload, FileText, Loader2, XCircle } from "lucide-react";
import { uploadResume, analyzeResume } from "../../services/api";
import { useResume } from "../../context/ResumeContext";

function UploadCard() {
  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
  resumeText,
  setResumeText,
  targetRole,
  setTargetRole,
  analysis,
  setAnalysis,
} = useResume();
  const handleFile = (file) => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setSelectedFile(file);
  };

  const handleBrowse = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);

      const data = await uploadResume(selectedFile);
      console.log("Upload Response:", data);
      setResumeText(data.resume_text);
      alert("Resume uploaded successfully!");

    }catch (error) {
     console.error(error);
     alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };
  const handleAnalyze = async () => {
    if (!targetRole) {
      alert("Please select a target role.");
      return;
    }
    try {
      setLoading(true);

      const result = await analyzeResume(
        resumeText,
        targetRole
      );

      setAnalysis(result.analysis);

    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`mx-auto max-w-3xl rounded-3xl border-2 border-dashed p-12 shadow-lg transition-all ${
        dragging
          ? "border-blue-600 bg-blue-50"
          : "border-blue-300 bg-white"
      }`}
    >
      <div className="flex flex-col items-center">

        <div className="rounded-full bg-blue-100 p-5">
          <Upload className="text-blue-600" size={40} />
        </div>

        <h2 className="mt-6 text-3xl font-bold">
          Upload Your Resume
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Drag & Drop your PDF
          <br />
          or browse from your computer.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={handleBrowse}
        />

        <button
          onClick={() => inputRef.current.click()}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
        >
          Browse File
        </button>

        <p className="mt-4 flex items-center gap-2 text-gray-400">
          <FileText size={16} />
          PDF files only
        </p>

        {selectedFile && (
          <div className="mt-8 w-full rounded-xl bg-green-50 p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold text-green-700">
                  {selectedFile.name}
                </p>

                <p className="text-sm text-green-600">
                  {(selectedFile.size / 1024).toFixed(1)} KB
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedFile(null);
                  setResumeText("");
                }}
              >
                <XCircle className="text-red-500" />
              </button>

            </div>
          </div>
        )}

        {selectedFile && (
          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-8 rounded-xl bg-green-600 px-8 py-4 text-white hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={20} />
                Uploading...
              </span>
            ) : (
              "Upload Resume"
            )}
          </button>
        )}

        {resumeText && (
          <div className="mt-10 w-full rounded-xl bg-gray-100 p-6">
            <h3 className="mb-3 text-xl font-bold">
              Extracted Resume Text
            </h3>

            <pre className="max-h-80 overflow-auto whitespace-pre-wrap text-sm">
              {resumeText}
            </pre>
          </div>
        )}
          {resumeText && (
            <div className="mt-8 w-full">

              <label className="mb-2 block font-semibold text-gray-700">
                Target Role
              </label>

              <select
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select a role</option>

                <option>AI Engineer</option>
                <option>Machine Learning Engineer</option>
                <option>Data Scientist</option>
                <option>Backend Developer</option>
                <option>Frontend Developer</option>
                <option>Full Stack Developer</option>
                <option>Software Engineer</option>
                <option>Cloud Engineer</option>
                <option>DevOps Engineer</option>

              </select>

            </div>
          )}
        {resumeText && targetRole && (
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={20} />
                Analyzing...
              </span>
            ) : (
              "Analyze Resume"
            )}
          </button>
        )}
      {analysis && (
        <div className="mt-10 w-full rounded-2xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Resume Analysis
          </h2>

          <div className="whitespace-pre-wrap leading-8 text-gray-700">
            {analysis}
          </div>

        </div>
      )}
      </div>
    </div>
  );
}

export default UploadCard;