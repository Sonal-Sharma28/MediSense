import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chatbot() {

  const navigate = useNavigate();

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! Ask me anything about your uploaded medical report.",
    },
  ]);

  const sendMessage = () => {

    if (!question.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "You",
        text: question,
      },
      {
        sender: "AI",
        text: "Backend integration coming next. I'll answer based on your uploaded report.",
      },
    ]);

    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-white shadow-sm px-10 py-5 flex justify-between">

        <h1 className="text-3xl font-bold text-blue-600">

          🤖 AI Medical Assistant

        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          Dashboard
        </button>

      </header>

      <div className="max-w-5xl mx-auto py-10">

        <div className="bg-white rounded-3xl shadow-lg h-[600px] flex flex-col">

          <div className="flex-1 p-8 overflow-y-auto">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`mb-5 ${
                  message.sender === "You"
                    ? "text-right"
                    : "text-left"
                }`}
              >

                <div
                  className={`inline-block px-5 py-3 rounded-2xl ${
                    message.sender === "You"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {message.text}
                </div>

              </div>

            ))}

          </div>

          <div className="border-t p-5 flex gap-4">

            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about your report..."
              className="flex-1 border rounded-xl px-5"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-8 rounded-xl"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;