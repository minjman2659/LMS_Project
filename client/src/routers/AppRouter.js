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
  setLogin,
  userInfo,
  setUserInfo,
  myCourses,
  setMyCourses,
  courseState,
  setCourseState,
}) => {
  // const isLoggedIn = true;
  return (
    <Routes>
      {!isLogin ? (
        <>
          <Route
            path={path.main}
            element={<Home setCourseState={setCourseState} />}
          />
          <Route
            path={path.courseInfo}
            element={
              <CourseInfoPage
                userInfo={userInfo}
                isLogin={isLogin}
                myCourses={myCourses}
                setMyCourses={setMyCourses}
                courseState={courseState}
              />
            }
          />
          <Route path={path.register} element={<RegisterPage />} />
          <Route
            path="/*"
            element={
              <LoginPage
                setLogin={setLogin}
                setUserInfo={setUserInfo}
              />
            }
          />
        </>
      ) : (
        <>
          <Route
            path={path.main}
            element={<Home setCourseState={setCourseState} />}
          />
          <Route
            path={path.courseInfo}
            element={
              <CourseInfoPage
                userInfo={userInfo}
                isLogin={isLogin}
                myCourses={myCourses}
                setMyCourses={setMyCourses}
                courseState={courseState}
              />
            }
          />
          <Route
            path={path.myCourses}
            element={
              <MyCoursePage
                myCourses={myCourses}
                setMyCourses={setMyCourses}
                setCourseState={setCourseState}
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
