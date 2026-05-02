import CourseItem from "./CourseItem";

export default function CourseList({ courses, onEdit, onDelete }) {
  if (courses.length === 0) {
    return <p className="text-gray-500 text-center">No courses yet</p>;
  }

  return (
    <div className="space-y-3">
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