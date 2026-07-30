import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <header className="bg-white shadow-sm px-10 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            🩺 MediSense
          </h1>
          <p className="text-gray-500 text-sm">
            AI Medical Report Analyzer
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>

      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto p-10">

        <h2 className="text-4xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-2">
          Here's a quick overview of your medical reports.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-xl font-bold">12</h3>
            <p className="text-gray-500">Reports Uploaded</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-bold">98%</h3>
            <p className="text-gray-500">AI Accuracy</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-xl font-bold">8</h3>
            <p className="text-gray-500">Reports Analysed</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-xl font-bold">24/7</h3>
            <p className="text-gray-500">AI Assistant</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-12">

          <h3 className="text-2xl font-bold mb-5">
            Quick Actions
          </h3>

          <div className="flex gap-5 flex-wrap">

            <button
              onClick={() => navigate("/upload")}
              className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              📤 Upload Report
            </button>

            <button
              onClick={() => navigate("/history")}
              className="bg-white shadow px-6 py-4 rounded-xl hover:shadow-lg transition"
            >
              📜 View History
            </button>

            <button
              onClick={() => navigate("/chatbot")}
              className="bg-white shadow px-6 py-4 rounded-xl hover:shadow-lg transition"
            >
              🤖 Ask AI
            </button>

          </div>

        </div>

        {/* Recent Reports */}
        <div className="mt-14">

          <h3 className="text-2xl font-bold mb-5">
            Recent Reports
          </h3>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Report</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="p-4">Blood Test.pdf</td>
                  <td className="p-4">30 Jul 2026</td>
                  <td className="p-4 text-green-600 font-semibold">
                    Completed
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">CBC Report.pdf</td>
                  <td className="p-4">28 Jul 2026</td>
                  <td className="p-4 text-green-600 font-semibold">
                    Completed
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">MRI Scan.pdf</td>
                  <td className="p-4">25 Jul 2026</td>
                  <td className="p-4 text-yellow-600 font-semibold">
                    Processing
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;