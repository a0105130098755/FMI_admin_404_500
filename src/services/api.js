import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.10.25:8181",
  withCredentials: true, // 백엔드 서버의 기본 URL
});

export const getApiUsage = async () => {
  const response = await api.get("/api/admin/api-usage");
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/api/admin/users");
  return response.data;
};

export default api;
