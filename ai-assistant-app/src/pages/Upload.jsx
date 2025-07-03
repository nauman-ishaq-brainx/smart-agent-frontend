import { useState } from "react";
import { uploadPdf } from "../services/pdfService";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // 👈 added

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a PDF file.");

    setLoading(true); //  disable button
    setMessage("");   //  clear previous messages

    try {
      await uploadPdf(file);
      setMessage("✅ File uploaded and indexed successfully.");
    } catch (err) {
      setMessage("❌ Upload failed.");
    } finally {
      setLoading(false); //  re-enable button
    }
  };

  return (
    <div className="container mt-5">
      <h2>Upload PDF</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control mb-3"
          disabled={loading} //
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading} 
        >
          {loading ? "Uploading..." : "Upload"} 
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Upload;
