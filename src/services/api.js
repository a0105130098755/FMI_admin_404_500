import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8181/api/admin",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 세션 쿠키를 포함하도록 설정
});

export default api;
