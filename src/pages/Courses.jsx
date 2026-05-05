import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../Components/SearchBar";
import FilterDropdown from "../Components/FilterDropdown";
import { getCourses } from "../services/courseService";
import Loader from "../components/ui/Loader";
import ErrorState from "../components/ui/ErrorState";
import EmptyState from "../components/ui/EmptyState";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterUser, setFilterUser] = useState("all");

  useEffect(() => {
    getCourses()
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterUser === "all" || course.userId === Number(filterUser);

    return matchesSearch && matchesFilter;
  });

  if (loading) return <Loader />;
  if (error) return <ErrorState message="Error loading courses" />;

  return (
    <div className="px-6 dark:bg-gray-900 min-h-screen py-10">

      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
        Courses
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <FilterDropdown value={filterUser} onChange={setFilterUser} />
      </div>

      {/* Courses */}
      {filteredCourses.length === 0 ? (
        <EmptyState message="No courses found" />
      ) : (
        <div className="grid md:grid-cols-3 gap-6 p-4">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

    </div>
  );
}