import { useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import api from "../services/api";
import { Bot, User, SendHorizontal } from "lucide-react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI medical assistant. Ask me anything about your uploaded report.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      // Replace with your chatbot API later
      const reply = {
        role: "assistant",
        content:
          "This feature will be connected to your AI backend in the next phase.",
      };

      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      console.error(err);
    }

    setQuestion("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <NavbarDashboard />

      <div className="max-w-5xl mx-auto px-8 py-10">

        <h1 className="text-4xl font-bold">
          AI Medical Assistant
        </h1>

        <p className="text-slate-500 mt-2">
          Ask questions related to your medical reports.
        </p>

        <div className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-sm h-[600px] flex flex-col">

          <div className="flex-1 overflow-y-auto p-6 space-y-5">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-xl px-5 py-4 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100"
                  }`}
                >

                  <div className="flex items-center gap-2 mb-2">

                    {msg.role === "assistant" ? (
                      <Bot size={18} />
                    ) : (
                      <User size={18} />
                    )}

                    <span className="font-semibold">
                      {msg.role === "assistant"
                        ? "AI"
                        : "You"}
                    </span>

                  </div>

                  {msg.content}

                </div>

              </div>

            ))}

          </div>

          <div className="border-t p-5 flex gap-4">

            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask your question..."
              className="flex-1 border border-slate-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl flex items-center gap-2"
            >
              <SendHorizontal size={18} />
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;