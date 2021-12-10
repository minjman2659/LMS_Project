import React from "react";

function Course({ course = {}, handleCourseClickNow = () => {} }) {
  return (
    <div
      className="course"
      style={{ width: "300px", marginLeft: "20px" }}
      onClick={() => handleCourseClickNow(course.id)}
    >
      <div>
        <img
          style={{
            width: "100%",
          }}
          src={course.imageUrl}
          alt={course.title}
        />
      </div>
    </div>
  );
}

export default Course;
