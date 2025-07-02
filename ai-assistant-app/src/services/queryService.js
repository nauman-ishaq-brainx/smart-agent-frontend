import axiosInstance from "../config/axios";

export const sendQuery = async (query) => {
  const res = await axiosInstance.post("/agent/query", { query });
  return res.data;
};
