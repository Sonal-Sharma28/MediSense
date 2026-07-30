import { useNavigate } from "react-router-dom";

function Analysis() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-white shadow px-10 py-5 flex justify-between">

        <h1 className="text-3xl font-bold text-blue-600">
          🤖 AI Analysis
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          Dashboard
        </button>

      </div>

      <div className="max-w-6xl mx-auto py-10">

        <div className="grid md:grid-cols-2 gap-8">

          {/* AI Summary */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              AI Summary
            </h2>

            <p className="text-gray-600 leading-8">

              The uploaded report appears normal.

              Hemoglobin, RBC, WBC and Platelet
              values are within the healthy range.

              No major abnormalities detected.

            </p>

          </div>

          {/* Abnormal Values */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">

              Important Values

            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span>Hemoglobin</span>

                <span className="text-green-600 font-bold">
                  Normal
                </span>

              </div>

              <div className="flex justify-between">

                <span>WBC</span>

                <span className="text-green-600 font-bold">
                  Normal
                </span>

              </div>

              <div className="flex justify-between">

                <span>Platelets</span>

                <span className="text-yellow-600 font-bold">
                  Slightly High
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-5 mt-10">

          <button
            onClick={() => navigate("/chatbot")}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl"
          >
            Ask AI
          </button>

          <button
            onClick={() => navigate("/history")}
            className="bg-white shadow px-8 py-4 rounded-xl"
          >
            View History
          </button>

        </div>

      </div>

    </div>
  );
}

export default Analysis;