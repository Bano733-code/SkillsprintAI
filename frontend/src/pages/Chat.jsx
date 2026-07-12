import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import ChatBox from "../components/chat/ChatBox";

import { careerChat } from "../services/api";

import { useResume } from "../context/ResumeContext";

function Chat() {

  const {
    messages,
    setMessages,
  } = useResume();

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {

      setLoading(true);

      const data = await careerChat(input);

      const aiMessage = {
        sender: "ai",
        text: data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {

      console.error(error);

      alert("Chat failed.");

    } finally {

      setLoading(false);

    }

    setInput("");

  };

  return (

    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-4xl font-bold">
          AI Career Coach
        </h1>

        <p className="mt-3 text-center text-gray-600">

          Ask anything about careers, interviews,
          resumes, learning, or job preparation.

        </p>

        <ChatBox messages={messages} />

        <div className="mt-6 flex gap-4">

          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 rounded-xl border p-4"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700"
          >

            {loading
              ? <Loader2 className="animate-spin"/>
              : <Send />}

          </button>

        </div>

      </div>

    </div>

  );

}

export default Chat;