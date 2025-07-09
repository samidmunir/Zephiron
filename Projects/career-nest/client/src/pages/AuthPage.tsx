import { useAuth } from "../context/Auth";
import { useTheme } from "../context/Theme";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const career_nest_auth = "http://localhost:3000/api/auth";

const AuthPage = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState("register");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (authMode === "register" && form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Registration failed.");
      return;
    }

    if (authMode === "login") {
      const formData = {
        email: form.email,
        password: form.password,
      };

      try {
        const res = await fetch(`${career_nest_auth}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          toast.error("Login failed.");
          return;
        }

        const data = await res.json();
        if (!data.success) {
          toast.error("Login failed.");
          return;
        }
        toast.success("You're logged in!");
        login(data.token, data.user);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } catch (err: any) {
        toast.error("Login failed.");
      }
    } else {
      try {
        const formData = {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.confirmPassword,
          adminCode: form.adminCode,
        };

        const res = await fetch(`${career_nest_auth}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          toast.error("Registration failed.");
          return;
        }

        const data = await res.json();
        if (!data.success) {
          toast.error("Registration failed.");
          return;
        }
        toast.success("Account created. Please login!");
        setTimeout(() => {
          navigate("/auth");
          setAuthMode("login");
        }, 1500);
      } catch (err: any) {
        toast.error("Registration failed.");
      }
    }
  };

  return (
    <main
      className={`w-full min-h-screen transition-all duration-1000 ${
        isDark ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <h1
        className={`text-5xl font-semibold text-center py-8 ${
          isDark ? "" : "text-[#0e4e87]"
        }`}
      >
        Get Started For Free
      </h1>
      <section className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] rounded-md p-8 shadow-2xl"
        >
          {authMode === "register" ? (
            <>
              <div className="flex items-center justify-center gap-8">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
              <div className="flex items-center justify-center gap-8 my-8">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="password"
                  name="adminCode"
                  value={form.adminCode}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
              <div className="flex items-center justify-center gap-8">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-8">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
            </>
          )}
          {error && (
            <div className="flex justify-start">
              <p className="text-md text-rose-500 font-bold">{error}</p>
            </div>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                authMode === "register" ? "w-[80%]" : "w-[40%]"
              } border-2 border-[#0e4e87] rounded-md px-2 py-1 my-8 font-semibold text-[#0e4e87] shadow-2xl transition-all duration-1000 hover:bg-[#0e4e87] hover:text-gray-100`}
            >
              {authMode === "register" ? "Register" : "Login"}
            </button>
          </div>
          {authMode === "register" ? (
            <div>
              <p className="text-center">
                Already have an account?{" "}
                <span
                  onClick={() => setAuthMode("login")}
                  className="underline"
                >
                  Login
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p className="text-center">
                Don't have an account?{" "}
                <span
                  onClick={() => setAuthMode("register")}
                  className="underline"
                >
                  Sign up
                </span>
              </p>
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default AuthPage;

// import type React from "react";
// import { useState } from "react";

// // If you don't want to use shadcn/ui, here's a version with custom components
// interface FormData {
//   email: string;
//   password: string;
//   confirmPassword?: string;
//   firstName?: string;
//   lastName?: string;
//   company?: string;
// }

// interface FormErrors {
//   email?: string;
//   password?: string;
//   confirmPassword?: string;
//   firstName?: string;
//   lastName?: string;
//   company?: string;
// }

// // Custom Button Component
// const Button: React.FC<{
//   children: React.ReactNode;
//   type?: "button" | "submit";
//   variant?: "default" | "outline";
//   className?: string;
//   disabled?: boolean;
//   onClick?: () => void;
// }> = ({
//   children,
//   type = "button",
//   variant = "default",
//   className = "",
//   disabled = false,
//   onClick,
// }) => {
//   const baseClasses =
//     "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const variantClasses = {
//     default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
//     outline:
//       "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
//   };

//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variantClasses[variant]} ${className} ${
//         disabled ? "opacity-50 cursor-not-allowed" : ""
//       }`}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// // Custom Input Component
// const Input: React.FC<{
//   type: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   className?: string;
// }> = ({ type, placeholder, value, onChange, className = "" }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
//     />
//   );
// };

// // Custom Card Components
// const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
//   children,
//   className = "",
// }) => (
//   <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
// );

// const CardHeader: React.FC<{
//   children: React.ReactNode;
//   className?: string;
// }> = ({ children, className = "" }) => (
//   <div className={`p-6 ${className}`}>{children}</div>
// );

// const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="px-6 pb-6">{children}</div>
// );

// const CardTitle: React.FC<{
//   children: React.ReactNode;
//   className?: string;
// }> = ({ children, className = "" }) => (
//   <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
// );

// const CardDescription: React.FC<{
//   children: React.ReactNode;
//   className?: string;
// }> = ({ children, className = "" }) => (
//   <p className={`text-gray-600 ${className}`}>{children}</p>
// );

// // Simple Icons (you can replace with react-icons or heroicons)
// const BriefcaseIcon = () => (
//   <svg
//     className="w-6 h-6"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//     />
//   </svg>
// );

// const EyeIcon = () => (
//   <svg
//     className="w-4 h-4"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//     />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//     />
//   </svg>
// );

// const EyeOffIcon = () => (
//   <svg
//     className="w-4 h-4"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
//     />
//   </svg>
// );

// export default function AuthPage() {
//   const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     firstName: "",
//     lastName: "",
//     company: "",
//   });
//   const [errors, setErrors] = useState<FormErrors>({});

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     if (activeTab === "signup") {
//       if (!formData.firstName) {
//         newErrors.firstName = "First name is required";
//       }
//       if (!formData.lastName) {
//         newErrors.lastName = "Last name is required";
//       }
//       if (!formData.confirmPassword) {
//         newErrors.confirmPassword = "Please confirm your password";
//       } else if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     console.log(`${activeTab} attempt:`, formData);
//     setIsLoading(false);
//   };

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: undefined }));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md mx-auto">
//         <Card className="shadow-2xl">
//           <CardHeader className="text-center space-y-4">
//             <div className="flex items-center justify-center space-x-3 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
//                 <BriefcaseIcon />
//               </div>
//               <h1 className="text-2xl font-bold text-gray-900">Career Nest</h1>
//             </div>

//             <CardTitle className="text-2xl font-bold text-gray-900">
//               {activeTab === "login" ? "Welcome back" : "Create your account"}
//             </CardTitle>
//             <CardDescription>
//               {activeTab === "login"
//                 ? "Sign in to continue your career journey"
//                 : "Join thousands of professionals growing their careers"}
//             </CardDescription>
//           </CardHeader>

//           <CardContent>
//             {/* Tab Navigation */}
//             <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setActiveTab("login")}
//                 className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
//                   activeTab === "login"
//                     ? "bg-white text-blue-600 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => setActiveTab("signup")}
//                 className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
//                   activeTab === "signup"
//                     ? "bg-white text-blue-600 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Sign Up
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {activeTab === "signup" && (
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Input
//                       type="text"
//                       placeholder="First name"
//                       value={formData.firstName || ""}
//                       onChange={(e) =>
//                         handleInputChange("firstName", e.target.value)
//                       }
//                       className={errors.firstName ? "border-red-500" : ""}
//                     />
//                     {errors.firstName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.firstName}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <Input
//                       type="text"
//                       placeholder="Last name"
//                       value={formData.lastName || ""}
//                       onChange={(e) =>
//                         handleInputChange("lastName", e.target.value)
//                       }
//                       className={errors.lastName ? "border-red-500" : ""}
//                     />
//                     {errors.lastName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.lastName}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}

//               <div>
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   className={errors.email ? "border-red-500" : ""}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               {activeTab === "signup" && (
//                 <div>
//                   <Input
//                     type="text"
//                     placeholder="Company (optional)"
//                     value={formData.company || ""}
//                     onChange={(e) =>
//                       handleInputChange("company", e.target.value)
//                     }
//                   />
//                 </div>
//               )}

//               <div>
//                 <div className="relative">
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder={
//                       activeTab === "login"
//                         ? "Enter your password"
//                         : "Create password"
//                     }
//                     value={formData.password}
//                     onChange={(e) =>
//                       handleInputChange("password", e.target.value)
//                     }
//                     className={`pr-10 ${
//                       errors.password ? "border-red-500" : ""
//                     }`}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//                 )}
//               </div>

//               {activeTab === "signup" && (
//                 <div>
//                   <Input
//                     type="password"
//                     placeholder="Confirm password"
//                     value={formData.confirmPassword || ""}
//                     onChange={(e) =>
//                       handleInputChange("confirmPassword", e.target.value)
//                     }
//                     className={errors.confirmPassword ? "border-red-500" : ""}
//                   />
//                   {errors.confirmPassword && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.confirmPassword}
//                     </p>
//                   )}
//                 </div>
//               )}

//               <Button
//                 type="submit"
//                 className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <span className="flex items-center space-x-2">
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     <span>
//                       {activeTab === "login"
//                         ? "Signing in..."
//                         : "Creating account..."}
//                     </span>
//                   </span>
//                 ) : activeTab === "login" ? (
//                   "Sign In"
//                 ) : (
//                   "Create Account"
//                 )}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
