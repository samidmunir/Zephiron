import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`, // or from context
  },
});

export const fetchUser = () => API.get("/user/me");
export const updateUser = (data: any) => API.put("/user/me", data);
export const resetPassword = (data: any) =>
  API.put("/user/me/reset-password", data);
