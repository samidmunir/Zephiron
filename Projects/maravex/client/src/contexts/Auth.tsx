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
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  //   updateUser: (updatedData: Partial<User>) => void;
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
    } catch (error) {
      console.error(`Failed to parse user from localStorage: ${error}`);
      localStorage.removeItem("user");
      setUser(null);
      setLoading(false);
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
    throw new Error("useAuth must be used within an <AuthProvider>;");
  }

  return context;
};
