import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  History,
  MessageCircle,
  User,
  LogOut,
  HeartPulse,
} from "lucide-react";

function NavbarDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Upload",
      path: "/upload",
      icon: <Upload size={18} />,
    },
    {
      name: "History",
      path: "/history",
      icon: <History size={18} />,
    },
    {
      name: "AI Chat",
      path: "/chatbot",
      icon: <MessageCircle size={18} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={18} />,
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <div
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="bg-blue-600 p-3 rounded-xl">
            <HeartPulse className="text-white" size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              MediSense
            </h1>

            <p className="text-sm text-slate-500">
              AI Medical Report Analyzer
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-3">

          {menus.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}

        </nav>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}

export default NavbarDashboard;