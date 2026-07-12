import { MessageCircleQuestion } from "lucide-react";

function InterviewCard({ questions }) {
  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-full bg-blue-100 p-3">
          <MessageCircleQuestion
            className="text-blue-600"
            size={28}
          />
        </div>

        <h2 className="text-3xl font-bold">
          AI Interview Questions
        </h2>

      </div>

      <div className="rounded-2xl bg-gray-50 p-6">

        <div className="whitespace-pre-wrap leading-8 text-gray-700">
          {questions.map((q,index)=>(
            <p key={index} className="mb-4">
                {q}
            </p>
            ))}
        </div>

      </div>

    </div>
  );
}

export default InterviewCard;