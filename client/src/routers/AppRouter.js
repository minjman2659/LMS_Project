import { Route, Routes } from "react-router-dom";

import path from "../lib/path";
import CourseDetailPage from "../Pages/CourseDetailPage";
import CourseInfoPage from "../Pages/CourseInfoPage";
import Home from "../Pages/Home";
import LectureDetailPage from "../Pages/LectureDetailPage";
import LoginPage from "../Pages/LoginPage";

const AppRouter = () => {
  const isLoggedIn = true;
  return (
    <Routes>
      {!isLoggedIn ? (
        <Route path="/*" element={<LoginPage />} />
      ) : (
        <>
          <Route path={path.main} element={<Home />} />
          <Route path={path.courseInfo} element={<CourseInfoPage />} />
          <Route path={path.courseDetail} element={<CourseDetailPage />} />
          <Route path={path.lectureDetail} element={<LectureDetailPage />} />
          <Route path={path.login} element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
