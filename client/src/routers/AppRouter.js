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

const AppRouter = ({ isLogin, setIsLogin }) => {
  // const isLoggedIn = true;
  return (
    <Routes>
      {!isLogin ? (
        <>
          <Route path={path.main} element={<Home />} />
          <Route path={path.courseInfo} element={<CourseInfoPage />} />
          <Route path="/*" element={<LoginPage setIsLogin={setIsLogin} />} />
        </>
      ) : (
        <>
          <Route path={path.main} element={<Home />} />
          <Route path={path.courseInfo} element={<CourseInfoPage />} />
          <Route path={path.courseDetail} element={<CourseDetailPage />} />
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
