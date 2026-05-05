import { useNavigate } from "react-router-dom";
import Badge from "./ui/Badge";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses/${course.id}`)}
      className="
        cursor-pointer p-5 rounded-xl border transition
        bg-white text-gray-900 border-gray-200
        dark:bg-gray-800 dark:text-white dark:border-gray-700
        hover:shadow-lg hover:-translate-y-1 duration-200
        flex flex-col gap-3
      "
    >

      <Badge variant="purple">
        {course.userId ? `User ${course.userId}` : "Custom"}
      </Badge>

      <h3 className="text-lg font-semibold">
        {course.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {course.body?.slice(0, 90)}...
      </p>

    </div>
  );
}