import axiosInstance from "../config/axios";

// Upload PDF to backend
export const uploadPdf = async (file) => {
  const formData = new FormData();
  formData.append("pdf", file);

  const res = await axiosInstance.post("/pdf/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};
