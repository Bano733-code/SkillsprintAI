import { useState } from "react";
import { Loader2 } from "lucide-react";

import { useResume } from "../context/ResumeContext";

import {
  generateInterview,
  evaluateInterview,
} from "../services/api";

import InterviewCard from "../components/interview/InterviewCard";

function Interview() {

  const {
    targetRole,
    setTargetRole,
    questions,
    setQuestions,
    feedback,
    setFeedback,
  } = useResume();

  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuestion = async () => {

    if (!targetRole) {
      alert("Please select a target role.");
      return;
    }

    try {

      setLoading(true);

      const data = await generateInterview(targetRole);

      setQuestions(data.questions);

      setAnswer("");
      setFeedback("");

    } catch (error) {

      console.error(error);

      alert("Unable to generate interview.");

    } finally {

      setLoading(false);

    }

  };

  const handleEvaluate = async () => {

    if (!answer) {
      alert("Please type your answer.");
      return;
    }

    try {

      setLoading(true);
      const questionsAnswers = `
      Interview Questions:

      ${questions.join("\n")}

      Candidate Answer:

      ${answer}
      `;

      const data = await evaluateInterview(
        targetRole,
        questionsAnswers
      );

      setFeedback(data.feedback);

    } catch (error) {

      console.error(error);

      alert("Evaluation failed.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-4xl font-bold">
          AI Interview Practice
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Practice AI-generated mock interviews and receive detailed feedback.
        </p>

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
            <option>DevOps Engineer</option>
          </select>

          <button
            onClick={handleQuestion}
            disabled={loading}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 disabled:opacity-60"
          >

            {loading ? (

              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={20}/>
                Generating...
              </span>

            ) : (

              "Generate Interview"

            )}

          </button>

        </div>

        {questions && (

          <>
            <InterviewCard questions={questions} />

            <div className="mt-8 rounded-2xl bg-white p-8 shadow">

              <label className="font-semibold">
                Your Answer
              </label>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={10}
                className="mt-4 w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
                placeholder="Write your answers to the interview questions here..."
              />

              <button
                onClick={handleEvaluate}
                disabled={loading}
                className="mt-6 rounded-xl bg-green-600 px-8 py-3 text-white hover:bg-green-700 disabled:opacity-60"
              >

                {loading ? (

                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={20}/>
                    Evaluating...
                  </span>

                ) : (

                  "Evaluate Interview"

                )}

              </button>

            </div>

          </>

        )}

        {feedback && (

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="mb-5 text-2xl font-bold">
              AI Interview Feedback
            </h2>

            <div className="whitespace-pre-wrap leading-8 text-gray-700">
              {feedback}
            </div>

          </div>

        )}

      </div>

    </div>

  );

}

export default Interview;