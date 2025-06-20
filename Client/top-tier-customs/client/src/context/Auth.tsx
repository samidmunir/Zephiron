// import { toast } from "react-toastify";

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";

type BillingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type ShippingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  billingAddress: BillingAddress;
  shippingAddress: ShippingAddress;
  isSubscribed: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
};

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   const storedUser = localStorage.getItem("user");

  //   if (storedToken && storedUser) {
  //     setToken(storedToken);
  //     setUser(JSON.parse(storedUser));
  //   }

  //   setLoading(false);
  // }, []);

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

    // toast.success("Logged out.");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, login, logout, loading }}
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
