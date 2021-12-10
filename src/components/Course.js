import React from 'react';

const Course = ({ course = {}, handleCourseClickNow = () => {} }) => {
  return (
    <div
      className='course'
      style={{ width: '500px', marginLeft: '70px' }}
      onClick={() => handleCourseClickNow(course.id)}
    >
      <div>
        <img
          style={{
            width: '100%',
          }}
          src={course.imageUrl}
          alt={course.title}
        />
      </div>
      <h3 style={{ textAlign: 'center', fontWeight: 'normal' }}>
        {course.title}
      </h3>
    </div>
  );
};

export default Course;
