// import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";

// const Signup = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // 🔐 TEMP MOCK SIGNUP — integrate with backend later
//     login({ email }, "fake-jwt-token");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 p-8 rounded shadow max-w-md w-full"
//       >
//         <h2 className="text-2xl font-bold mb-6">Create an Account</h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="w-full mb-4 px-4 py-2 rounded border dark:bg-gray-700"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full mb-4 px-4 py-2 rounded border dark:bg-gray-700"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full mb-6 px-4 py-2 rounded border dark:bg-gray-700"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //   const { login } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    adminCode: "",
    career: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || data.errors?.[0]?.msg || "Signup failed");
        return;
      }

      //   login(data.user, data.token);
      alert("Registration successful. Please login!");
      navigate("/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6">Create an Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded border dark:bg-gray-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded border dark:bg-gray-700"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 rounded border dark:bg-gray-700"
        />

        <input
          type="password"
          name="adminCode"
          placeholder="ADMIN (optional)"
          value={form.adminCode}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 rounded border dark:bg-gray-700"
        />

        <input
          type="text"
          name="career"
          placeholder="Your Career"
          value={form.career}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 rounded border dark:bg-gray-700"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
