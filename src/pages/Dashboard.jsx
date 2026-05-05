import { useState, useEffect } from "react";
import CourseList from "../components/CourseList";
import { getCourses, saveCourses } from "../services/dashboardService";
import Modal from "../Components/Modal";
import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input";
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
    <div className="px-6 min-h-screen bg-gray-100 dark:bg-gray-950">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Dashboard
      </h1>

      <div className="text-center mb-6">
        <Button variant="primary" onClick={openAddModal}>
          Add Course
        </Button>
      </div>

      <CourseList
        courses={courses}
        onEdit={openEditModal}
        onDelete={deleteCourse}
      />

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

      <h2 className="text-xl font-bold mb-4">
        {editingCourse ? "Edit Course" : "Add Course"}
      </h2>

      <Input
        label="Course Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter course title"
      />

      <div className="flex justify-end gap-3">

        <Button variant="primary" onClick={() => setIsModalOpen(false)}>
          cancel
        </Button>

        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>

      </div>

    </Modal>

    </div>
  );
}