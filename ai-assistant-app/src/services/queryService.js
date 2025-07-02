import axiosInstance from "../config/axios";

export const sendQuery = async (query) => {
  const res = await axiosInstance.post("/query", { query });
  return res.data;
};
