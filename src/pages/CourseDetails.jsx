import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">
        Course ID: {id}
      </h1>
    </div>
  );
}