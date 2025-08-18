import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useApplicationStore = create((set, get) => ({
  applications: [],
  userApplications: [],
  fetchedApplication: null,
  loading: false,

  getUserApplications: async (userID) => {
    set({ loading: true });

    try {
      const res = await axios.get(`/applications/user/${userID}`);
      const dbApplications = res.data.applications;
      set({ userApplications: dbApplications, loading: false });
      return {
        success: res.data.success,
        message: res.data.message,
        data: res.data.applications,
      };
    } catch (error) {
      set({ loading: false });
      toast.error("Failure");
      return { ok: false };
    }
  },

  getApplication: async (id) => {
    set({ loading: true });
    const res = await axios.get(`/applications/${id}`);
    const doc = res.data.application;
    console.log("doc:", doc);
    set({ fetchedApplication: doc, loading: false });
    return doc; // <-- critical so the component can set state immediately
  },

  track: async ({
    title,
    company,
    workType,
    location,
    salary,
    description,
    notes,
    requiredSkills,
    url,
    category,
    position,
    status,
  }) => {
    set({ loading: true });

    try {
      const res = await axios.post("/applications/track", {
        title,
        company,
        workType,
        location,
        salary,
        description,
        notes,
        requiredSkills,
        url,
        category,
        position,
        status,
      });
      set({ loading: false });
      return { ok: true, application: res.data.application };
    } catch (error) {
      set({ loading: false });
      toast.error("Failed to track application.");
      return { ok: false };
    }
  },

  untrack: async ({ applicationID }) => {
    set({ loading: true });

    try {
      await axios.delete(`/applications/${applicationID}`);
      set({ loading: false });
      return { ok: true };
    } catch (error) {
      set({ loading: false });
      toast.error("Failed to untrack application");
      return { ok: false };
    }
  },

  update: async (applicationID, updates) => {
    set({ loading: true });

    try {
      const res = await axios.put(`/applications/${applicationID}`, updates);
      set({ fetchedApplication: res.data.application, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error("Failed to update application.");
      return { ok: false };
    }
  },
}));
