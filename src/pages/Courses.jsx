import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../Components/SearchBar";
import FilterDropdown from "../Components/FilterDropdown";
import { getCourses } from "../services/courseService";


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

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error loading data</p>;

  return (
    <div className="px-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Courses
      </h1>

      {/* 🔍 Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <FilterDropdown
            value={filterUser}
            onChange={setFilterUser}
          />
        </div>

      {/* 🧾 Courses */}
      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500">No results found</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

    </div>
  );
}