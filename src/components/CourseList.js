import React from "react";
import Course from "./Course";

const CourseList = ({ courseList = [], handleCourseClick = () => {} }) => {
  const handleCourseClickNow = (courseId) => {
    handleCourseClick(courseId);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {courseList.map((course) => {
        return (
          <Course
            key={course.id}
            course={course}
            handleCourseClickNow={handleCourseClickNow}
          />
        );
      })}
    </div>
  );
};

export default CourseList;
