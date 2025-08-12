import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    career: string
  ) => {
    set({ loading: true });

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      set({ loading: false });
      return;
    }

    try {
      const res = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
        career,
      });
      set({ user: res.data, loading: false });
    } catch (error: any) {
      set({ loading: false });
      toast.error(
        error.response.data.message || "An error occurred, please try again."
      );
    }
  },
}));
