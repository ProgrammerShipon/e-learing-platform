import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const CoursesLoad = async () => {
      const res = await fetch("/Courses-data.json");
      const data = await res?.json();

      setCourses(data);
    };

    CoursesLoad();
  }, []);

  return { courses };
};

export default useCourses;
