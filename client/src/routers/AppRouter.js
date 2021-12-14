import { Route, Routes } from "react-router-dom";
import path from "../lib/path";
import CourseDetailPage from "../Pages/CourseDetailPage";
import CourseInfoPage from "../Pages/CourseInfoPage";
import Home from "../Pages/Home";
import LectureDetailPageWelcome from "../Pages/LectureDetailPage_Welcome";
import LectureDetailPageMovie from "../Pages/LectureDetailPage_Movie";
import LectureDetailPageImage from "../Pages/LectureDetailPage_Image";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import MyCoursePage from "../Pages/MyCoursePage";

const AppRouter = ({
  isLogin,
  setIsLogin,
  userInfo,
  setIsUserInfo,
  myCourses,
  setIsMyCourses,
  courseState,
  setIsCourseState,
}) => {
  // const isLoggedIn = true;
  return (
    <Routes>
      {!isLogin ? (
        <>
          <Route
            path={path.main}
            element={<Home setIsCourseState={setIsCourseState} />}
          />
          <Route
            path={path.courseInfo}
            element={
              <CourseInfoPage
                userInfo={userInfo}
                isLogin={isLogin}
                myCourses={myCourses}
                setIsMyCourses={setIsMyCourses}
                courseState={courseState}
              />
            }
          />
          <Route path={path.register} element={<RegisterPage />} />
          <Route
            path="/*"
            element={
              <LoginPage
                setIsLogin={setIsLogin}
                setIsUserInfo={setIsUserInfo}
              />
            }
          />
        </>
      ) : (
        <>
          <Route
            path={path.main}
            element={<Home setIsCourseState={setIsCourseState} />}
          />
          <Route
            path={path.courseInfo}
            element={
              <CourseInfoPage
                userInfo={userInfo}
                isLogin={isLogin}
                myCourses={myCourses}
                setIsMyCourses={setIsMyCourses}
                courseState={courseState}
              />
            }
          />
          <Route
            path={path.myCourses}
            element={
              <MyCoursePage
                myCourses={myCourses}
                setIsMyCourses={setIsMyCourses}
                setIsCourseState={setIsCourseState}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path={path.courseDetail}
            element={<CourseDetailPage courseState={courseState} />}
          />
          <Route
            path={path.lectureDetail_welcome}
            element={<LectureDetailPageWelcome />}
          />
          <Route
            path={path.lectureDetail_movie}
            element={<LectureDetailPageMovie />}
          />
          <Route
            path={path.lectureDetail_image}
            element={<LectureDetailPageImage />}
          />
          <Route path={path.register} element={<RegisterPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
