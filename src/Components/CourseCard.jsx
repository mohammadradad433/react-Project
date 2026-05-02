import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

      <h3 className="text-lg font-bold mb-2">
        {course.title}
      </h3>

      <p className="text-gray-500 mb-4">
        {course.body.slice(0, 80)}...
      </p>

      <Link 
        to={`/courses/${course.id}`}
        className="text-purple-600 font-semibold hover:underline"
      >
        View Details →
      </Link>

    </div>
  );
}