import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-white shadow-sm px-10 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-blue-600">
          📤 Upload Medical Report
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          Dashboard
        </button>

      </div>

      <div className="max-w-4xl mx-auto py-16">

        {/* Upload Box */}

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center">
            Upload Your Report
          </h2>

          <p className="text-center text-gray-500 mt-4">
            Upload your Blood Test, CBC, MRI, X-Ray or any medical report.
          </p>

          <div className="mt-10 border-4 border-dashed border-blue-300 rounded-3xl p-20 text-center">

            <div className="text-7xl">
              📄
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Drag & Drop Report Here
            </h3>

            <p className="text-gray-500 mt-3">
              or
            </p>

            <button className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
              Choose PDF
            </button>

            <p className="mt-5 text-gray-400">
              Supported Formats: PDF, JPG, PNG
            </p>

          </div>

          <button
            onClick={() => navigate("/analysis")}
            className="mt-10 w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition text-xl"
          >
            Analyze Report →
          </button>

        </div>

      </div>

    </div>
  );
}

export default Upload;