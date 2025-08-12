import { useState, type FormEvent } from "react";
import { useUserStore } from "../stores/UserStore";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    career: "",
  });
  const [loading, setLoading] = useState(false);

  const { signup, user } = useUserStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    signup(form);
  };
  return (
    <main>
      <h1>Signup Page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border-1"
          />
          <input
            type="text"
            id="email"
            placeholder="johndoe@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border-1"
          />
          <input
            type="password"
            id="password"
            placeholder="******"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border-1"
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="******"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            className="border-1"
          />
          <input
            type="text"
            id="career"
            placeholder="Career"
            value={form.career}
            onChange={(e) => setForm({ ...form, career: e.target.value })}
            className="border-1"
          />
          <button type="submit" className="border-1">
            Signup
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
