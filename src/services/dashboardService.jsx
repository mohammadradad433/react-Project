export const getCourses = () => {
  return JSON.parse(localStorage.getItem("courses")) || [];
};

export const saveCourses = (courses) => {
  localStorage.setItem("courses", JSON.stringify(courses));
};