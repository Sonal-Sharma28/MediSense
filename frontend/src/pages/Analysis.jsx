import { useLocation, useNavigate } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import { FileText, AlertTriangle, HeartPulse, Lightbulb } from "lucide-react";

function Analysis() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate("/upload")}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Upload Report
        </button>
      </div>
    );
  }

  const analysis = state.analysis;

  return (
    <div className="min-h-screen bg-slate-100">

      <NavbarDashboard />

      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-8">
          AI Medical Analysis
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-blue-600" />
              <h2 className="text-2xl font-semibold">
                Summary
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              {analysis.summary}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-orange-500" />
              <h2 className="text-2xl font-semibold">
                Abnormal Values
              </h2>
            </div>

            <ul className="space-y-3">
              {analysis.abnormal_values.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <div className="flex items-center gap-3 mb-4">
              <HeartPulse className="text-red-500" />
              <h2 className="text-2xl font-semibold">
                Possible Health Risks
              </h2>
            </div>

            <ul className="space-y-3">
              {analysis.possible_health_risks.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-yellow-500" />
              <h2 className="text-2xl font-semibold">
                Recommendations
              </h2>
            </div>

            <ul className="space-y-3">
              {analysis.recommendations.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analysis;