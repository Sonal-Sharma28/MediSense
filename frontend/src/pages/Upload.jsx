import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarDashboard from "../components/NavbarDashboard";
import { UploadCloud, FileText, LoaderCircle } from "lucide-react";

function Upload() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/analysis", {
        state: response.data,
      });
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <NavbarDashboard />

      <div className="max-w-4xl mx-auto py-12 px-6">

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10">

          <h1 className="text-4xl font-bold text-center">
            Upload Medical Report
          </h1>

          <p className="text-center text-slate-500 mt-3">
            Upload your PDF report for AI analysis.
          </p>

          <label
            htmlFor="file"
            className="mt-10 border-2 border-dashed border-blue-300 rounded-3xl h-72 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition"
          >
            <UploadCloud size={70} className="text-blue-600" />

            <h2 className="text-2xl font-semibold mt-6">
              Choose Report
            </h2>

            <p className="text-slate-500 mt-2">
              PDF Only
            </p>

            <input
              id="file"
              type="file"
              accept=".pdf"
              hidden
              onChange={handleFileChange}
            />
          </label>

          {selectedFile && (
            <div className="mt-8 bg-slate-50 rounded-2xl p-5 flex items-center gap-4">

              <FileText className="text-blue-600" />

              <div>

                <h3 className="font-semibold">
                  {selectedFile.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Ready for analysis
                </p>

              </div>

            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold flex justify-center items-center gap-3"
          >
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Report"
            )}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Upload;