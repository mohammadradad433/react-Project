import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [id]);

  if (!course) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="px-6">

      <h1 className="text-3xl font-bold mb-4">
        {course.title}
      </h1>

      <p className="text-gray-500">
        {course.body}
      </p>

    </div>
  );
}