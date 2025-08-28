import { toast } from "react-toastify";

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phone: string;
  career: string;
  billing: {
    address: string;
    city: string;
    state: string | null;
    country: string;
    zip: string;
  };
  subscription: {
    stripeUserID: string;
    planID: string;
    plan: string;
    period: string;
    autoRenew: boolean;
    startDate: Date;
    renewalDate: Date;
  };
  role: string;
  createdAt: string;
  updatedAt: string;
};

interface AuthContextType {
  user: User | null;
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  updateUser: (newData: Partial<User>) => void;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserRaw = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    try {
      if (storedUserRaw && storedUserRaw !== "undefined" && storedToken) {
        const storedUser = JSON.parse(storedUserRaw);
        setUser(storedUser);
        setToken(storedToken);
      }
      setLoading(false);
    } catch (err) {
      console.error("Failed to parse user from localStorage:", err);
      localStorage.removeItem("user"); // Clean up invalid state
      setUser(null);
    }
  }, []);

  const login = (token: string, user: User) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out.");
  };

  const updateUser = (newData: Partial<User>) => {
    if (!user) {
      return;
    }

    setUser({ ...user, ...newData });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, updateUser, token, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }

  return context;
};
