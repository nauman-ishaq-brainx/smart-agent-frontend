import { useState } from "react";
import { uploadPdf } from "../services/pdfService";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a PDF file.");

    try {
      await uploadPdf(file);
      setMessage("✅ File uploaded and indexed successfully.");
    } catch (err) {
      setMessage("❌ Upload failed.");
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
        />
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Upload;
