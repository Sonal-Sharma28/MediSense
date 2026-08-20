import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import NavbarDashboard from "../components/NavbarDashboard";

import {
  FileText,
  Activity,
  Brain,
  Calendar,
  Upload,
  History,
  MessageCircle,
  User,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const [health, setHealth] = useState("Checking backend...");

  useEffect(() => {
    api
      .get("/health")
      .then((res) => setHealth(res.data.status))
      .catch(() => setHealth("Backend Offline"));
  }, []);

  const stats = [
    {
      title: "Reports",
      value: "12",
      subtitle: "Uploaded",
      icon: <FileText size={26} />,
    },
    {
      title: "Risk",
      value: "Medium",
      subtitle: "Latest Analysis",
      icon: <Activity size={26} />,
    },
    {
      title: "AI",
      value: "Groq",
      subtitle: "Llama 3.3",
      icon: <Brain size={26} />,
    },
    {
      title: "Last Upload",
      value: "Today",
      subtitle: "CBC Report",
      icon: <Calendar size={26} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      <NavbarDashboard />

      <div className="max-w-7xl mx-auto px-8 py-10">

        <h1 className="text-4xl font-bold text-slate-900">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Your AI-powered healthcare dashboard.
        </p>

        <p className="mt-3 text-green-600 font-medium">
          {health}
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between">

                <div>

                  <p className="text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {item.subtitle}
                  </p>

                </div>

                <div className="text-blue-600">
                  {item.icon}
                </div>

              </div>

            </div>
          ))}

        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <button
            onClick={() => navigate("/upload")}
            className="bg-blue-600 text-white rounded-2xl p-8 hover:bg-blue-700 transition"
          >
            <Upload className="mx-auto mb-4" size={32} />
            Upload Report
          </button>

          <button
            onClick={() => navigate("/history")}
            className="bg-white rounded-2xl p-8 shadow border hover:shadow-lg transition"
          >
            <History className="mx-auto mb-4" size={32} />
            History
          </button>

          <button
            onClick={() => navigate("/chatbot")}
            className="bg-white rounded-2xl p-8 shadow border hover:shadow-lg transition"
          >
            <MessageCircle className="mx-auto mb-4" size={32} />
            AI Chat
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-white rounded-2xl p-8 shadow border hover:shadow-lg transition"
          >
            <User className="mx-auto mb-4" size={32} />
            Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;