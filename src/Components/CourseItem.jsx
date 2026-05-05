export default function CourseItem({ course, onEdit, onDelete }) {
  return (
    <div className="
      flex justify-between items-center p-4 rounded-xl transition
      bg-gray-100 text-gray-900
      dark:bg-gray-800 dark:text-white
      hover:shadow
    ">

      {/* Title */}
      <div className="font-medium">
        {course.title}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => onEdit(course)}
          className="
            text-blue-500 hover:text-blue-600
            dark:text-blue-400 dark:hover:text-blue-300
            font-medium transition
          "
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(course.id)}
          className="
            text-red-500 hover:text-red-600
            dark:text-red-400 dark:hover:text-red-300
            font-medium transition
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
}