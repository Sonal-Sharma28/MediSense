import { useEffect, useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import api from "../services/api";
import {
  Search,
  FileText,
  Calendar,
  ShieldCheck,
  Eye,
  Download,
} from "lucide-react";

function History() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace with your database endpoint later
    setReports([
      {
        id: 1,
        name: "CBC Report.pdf",
        date: "Today",
        risk: "Medium",
        status: "Completed",
      },
      {
        id: 2,
        name: "Blood Test.pdf",
        date: "Yesterday",
        risk: "Low",
        status: "Completed",
      },
      {
        id: 3,
        name: "Liver Report.pdf",
        date: "28 Jul",
        risk: "High",
        status: "Completed",
      },
    ]);
  }, []);

  const filtered = reports.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">

      <NavbarDashboard />

      <div className="max-w-7xl mx-auto px-8 py-10">

        <h1 className="text-4xl font-bold">
          Report History
        </h1>

        <p className="text-slate-500 mt-2">
          Access all previously analyzed reports.
        </p>

        <div className="mt-8 relative">

          <Search
            className="absolute left-4 top-3.5 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="text-left p-5">Report</th>
                <th className="text-left p-5">Date</th>
                <th className="text-left p-5">Risk</th>
                <th className="text-left p-5">Status</th>
                <th className="text-left p-5">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((report) => (

                <tr
                  key={report.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-5 flex items-center gap-3">

                    <FileText
                      className="text-blue-600"
                      size={20}
                    />

                    {report.name}

                  </td>

                  <td className="p-5">
                    <div className="flex items-center gap-2">

                      <Calendar size={16} />

                      {report.date}

                    </div>
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        report.risk === "Low"
                          ? "bg-green-100 text-green-700"
                          : report.risk === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {report.risk}
                    </span>

                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-2 text-green-600">

                      <ShieldCheck size={18} />

                      {report.status}

                    </div>

                  </td>

                  <td className="p-5">

                    <div className="flex gap-3">

                      <button className="p-2 rounded-lg hover:bg-slate-100">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-slate-100">
                        <Download size={18} />
                      </button>

                    </div>

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