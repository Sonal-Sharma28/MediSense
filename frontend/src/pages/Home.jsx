import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}

      <nav className="bg-white border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold text-blue-600">
              MediSense
            </h1>

            <p className="text-slate-500 text-sm">
              AI Medical Report Analyzer
            </p>

          </div>

          <div className="flex gap-4">

            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-100"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            >
              Get Started
            </button>

          </div>

        </div>

      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            AI Powered Healthcare
          </span>

          <h1 className="text-6xl font-bold text-slate-900 mt-8 leading-tight">
            Understand Your
            <br />
            Medical Reports
            <span className="text-blue-600"> with AI.</span>
          </h1>

          <p className="text-slate-600 text-lg mt-8 leading-8">
            Upload blood tests, MRI, CT Scan, X-Ray and other medical
            reports to receive AI-powered summaries, health risks,
            abnormal values and recommendations instantly.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-slate-300 hover:bg-slate-100 px-8 py-4 rounded-2xl font-semibold"
            >
              Login
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src="/doctor.png"
            alt="Healthcare"
            className="w-[520px]"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;