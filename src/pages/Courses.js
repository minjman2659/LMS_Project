import React, { useState } from 'react';
import mockData from '../mockData';
import CourseList from '../components/CourseList';

const Courses = () => {
  const [courseList, setCourseList] = useState(mockData);

  const handleCourseClick = (courseId) => {
    const clicked = courseList.filter((el) => el.id === courseId);
    console.log(`${clicked[0].title}을 클릭했습니다.`);
  };

  return (
    <div>
      <CourseList
        courseList={courseList}
        handleCourseClick={handleCourseClick}
      />
    </div>
  );
};

export default Courses;
