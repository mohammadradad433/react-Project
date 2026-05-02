export default function CourseItem({ course, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
      <span>{course.title}</span>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(course)}
          className="text-blue-500"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(course.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}