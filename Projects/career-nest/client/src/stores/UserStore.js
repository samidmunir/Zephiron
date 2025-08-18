import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword, career }) => {
    set({ loading: true });

    if (password !== confirmPassword) {
      set({ loading: false, checkingAuth: false });
      return toast.error("Passwords do not match.");
    }

    try {
      const res = await axios.post("/auth/signup", {
        name,
        email,
        password,
        career,
      });

      if (!res.data.success && res.data.error === null) {
        set({ loading: false, checkingAuth: false });
        return toast.error(res.data.message);
      } else if (!res.data.success && res.data.error) {
        set({ loading: false, checkingAuth: false });
        return toast.error(res.data.error);
      } else {
        set({ loading: false, checkingAuth: false });
      }
    } catch (error) {
      set({ loading: false, checkingAuth: false });
      toast.error(error.response.data.message || "An error occurred.");
    }
  },

  login: async ({ email, password }) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/login", { email, password });

      if (!res.data.success && res.data.message === "Invalid credentials.") {
        toast.error(res.data.message);
      } else if (
        !res.data.success &&
        res.data.message === "Internal server error."
      ) {
        toast.error(res.data.error);
      } else {
        const userData = res.data?.user;

        set({ user: userData, loading: false, checkingAuth: false });

        toast.success("Login successful!");
      }
    } catch (error) {
      set({ loading: false, checkingAuth: false });
      toast.error(error.response.data.message || null);
    }
  },

  logout: async () => {
    try {
      await axios.post("/auth/logout");
      set({ user: null, checkingAuth: false });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during logout."
      );
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });

    try {
      const res = await axios.get("/auth/profile");
      set({ user: res.data.user, checkingAuth: false });
    } catch (error) {
      set({ user: null, checkingAuth: false });
    }
  },
}));
