export const getCourses = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const localCourses =
    JSON.parse(localStorage.getItem("courses")) || [];

  return [...localCourses, ...data.slice(0, 10)];
};