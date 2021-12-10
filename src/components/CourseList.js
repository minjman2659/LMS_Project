import React from 'react';
import Course from './Course';

const CourseList = ({ courseList = [], handleCourseClick = () => {} }) => {
  const handleCourseClickNow = (courseId) => {
    handleCourseClick(courseId);
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <h1 style={{ fontWeight: 'bold' }}>Courses</h1>
        <h3 style={{ fontWeight: 'normal' }}>강력 추천하는 강의들</h3>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
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
    </>
  );
};

export default CourseList;
