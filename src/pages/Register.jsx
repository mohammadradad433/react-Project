import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
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
    alert("Register Success (UI only)");
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">

      <div className="
        w-full max-w-md p-6 rounded-xl shadow
        bg-white text-gray-900 border border-gray-200
        dark:bg-gray-800 dark:text-white dark:border-gray-700
      ">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <Input
            label="Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

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
            Create Account
          </Button>

        </form>

        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}