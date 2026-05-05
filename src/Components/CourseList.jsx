import CourseItem from "./CourseItem";

export default function CourseList({ courses, onEdit, onDelete }) {
  if (courses.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-10">
        No courses yet
      </p>
    );
  }

  return (
    <div className="space-y-3 p-4">
      {courses.map(course => (
        <CourseItem
          key={course.id}
          course={course}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}