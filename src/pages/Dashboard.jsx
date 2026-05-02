import { useState, useEffect } from "react";
import CourseList from "../components/CourseList";
import CourseModal from "../components/CourseModal";
import { getCourses, saveCourses } from "../services/dashboardService";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    setCourses(getCourses());
  }, []);

  useEffect(() => {
    saveCourses(courses);
  }, [courses]);

  const openAddModal = () => {
    setEditingCourse(null);
    setTitle("");
    setIsModalOpen(true);
  };

  const openEditModal = (course) => {
    setEditingCourse(course);
    setTitle(course.title);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!title) return;

    if (editingCourse) {
      setCourses(courses.map(c =>
        c.id === editingCourse.id ? { ...c, title } : c
      ));
    } else {
      const newCourse = {
        id: Date.now(),
        title,
        body: "Custom course",
        userId: 2,
      };
      setCourses([...courses, newCourse]);
    }

    setIsModalOpen(false);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="px-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Dashboard
      </h1>

      <div className="text-center mb-6">
        <button
          onClick={openAddModal}
          className="bg-purple-600 text-white px-6 py-2 rounded"
        >
          Add Course
        </button>
      </div>

      <CourseList
        courses={courses}
        onEdit={openEditModal}
        onDelete={deleteCourse}
      />

      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        title={title}
        setTitle={setTitle}
        editingCourse={editingCourse}
      />

    </div>
  );
}