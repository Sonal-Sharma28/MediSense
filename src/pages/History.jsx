import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();

  const reports = [
    {
      name: "Blood Test.pdf",
      date: "30 Jul 2026",
      status: "Completed",
    },
    {
      name: "CBC Report.pdf",
      date: "28 Jul 2026",
      status: "Completed",
    },
    {
      name: "MRI Scan.pdf",
      date: "25 Jul 2026",
      status: "Processing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-white shadow-sm px-10 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          📜 Report History
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          Dashboard
        </button>
      </header>

      <div className="max-w-6xl mx-auto py-10">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="text-left p-5">Report</th>
                <th className="text-left p-5">Date</th>
                <th className="text-left p-5">Status</th>
                <th className="text-left p-5">Action</th>

              </tr>

            </thead>

            <tbody>

              {reports.map((report, index) => (

                <tr key={index} className="border-t">

                  <td className="p-5">{report.name}</td>

                  <td>{report.date}</td>

                  <td>

                    <span className={`font-semibold ${
                      report.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}>
                      {report.status}
                    </span>

                  </td>

                  <td>

                    <button
                      onClick={() => navigate("/analysis")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default History;