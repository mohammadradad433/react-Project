import { Link } from "react-router-dom";
import Button from "./ui/Button";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] gap-6 px-4">

      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
        Learn & Manage Courses Easily
      </h1>

      <p className="text-gray-500 max-w-xl">
        A modern SaaS platform for managing educational content and dashboards.
      </p>

      <Button as="link" to="/login" variant="primary">
         Get Started
      </Button>

    </div>
  );
}