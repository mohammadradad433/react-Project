import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Success (UI only)");
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">

      <div className="
        w-full max-w-md p-6 rounded-xl shadow
        bg-white text-gray-900 border border-gray-200
        dark:bg-gray-800 dark:text-white dark:border-gray-700
      ">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <Button type="submit" className="w-full">
            Login
          </Button>

        </form>

        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}