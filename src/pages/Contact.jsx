import { useState } from "react";
import TextareaField from "../Components/TextareaField";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setErrors({});
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="px-6 max-w-xl mx-auto py-10 text-gray-800 dark:text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Contact Us
      </h1>

      {/* Success */}
      {success && (
        <div className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 p-3 rounded mb-4 text-center">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <Input
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

        {/* Email */}
        <Input
          label="Your Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Message */}
        <TextareaField
          name="message"
          value={form.message}
          onChange={handleChange}
          error={errors.message}
        />

        {/* Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

      </form>
    </div>
  );
}