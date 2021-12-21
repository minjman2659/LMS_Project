import { Route, Routes } from "react-router-dom";
import path from "../lib/path";
import CourseDetailPage from "../Pages/CourseDetailPage";
import CourseInfoPage from "../Pages/CourseInfoPage";
import Home from "../Pages/Home";
import LectureDetailPageWelcome from "../Pages/LectureDetailPage_Welcome";
import LectureDetailPageVideo from "../Pages/LectureDetailPage_Video";
import LectureDetailPageImage from "../Pages/LectureDetailPage_Image";
import LectureDetailPageRate from "../Pages/LectureDetailPage_Rate";
import LectureDetailPageQuiz from "../Pages/LectureDetailPage_Quiz";
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
  welcomeState,
  setWelcomeState,
  videoState,
  setVideoState,
  imageState,
  setImageState,
  rateState,
  setRateState,
  quizState,
  setQuizState,
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
              <LoginPage setLogin={setLogin} setUserInfo={setUserInfo} />
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
                setCourseState={setCourseState}
              />
            }
          />
          <Route
            path={path.courseDetail}
            element={
              <CourseDetailPage
                courseState={courseState}
                welcomeState={welcomeState}
                videoState={videoState}
                imageState={imageState}
                rateState={rateState}
                quizState={quizState}
              />
            }
          />
          <Route
            path={path.lectureDetail_welcome}
            element={
              <LectureDetailPageWelcome
                setWelcomeState={setWelcomeState}
                welcomeState={welcomeState}
                videoState={videoState}
                imageState={imageState}
                rateState={rateState}
                quizState={quizState}
              />
            }
          />
          <Route
            path={path.lectureDetail_video}
            element={
              <LectureDetailPageVideo
                welcomeState={welcomeState}
                setVideoState={setVideoState}
                videoState={videoState}
                imageState={imageState}
                rateState={rateState}
                quizState={quizState}
              />
            }
          />
          <Route
            path={path.lectureDetail_image}
            element={
              <LectureDetailPageImage
                welcomeState={welcomeState}
                videoState={videoState}
                setImageState={setImageState}
                imageState={imageState}
                rateState={rateState}
                quizState={quizState}
              />
            }
          />
          <Route
            path={path.lectureDetail_rate}
            element={
              <LectureDetailPageRate
                welcomeState={welcomeState}
                videoState={videoState}
                imageState={imageState}
                setRateState={setRateState}
                rateState={rateState}
                quizState={quizState}
              />
            }
          />
          <Route
            path={path.lectureDetail_quiz}
            element={
              <LectureDetailPageQuiz
                welcomeState={welcomeState}
                videoState={videoState}
                imageState={imageState}
                rateState={rateState}
                setQuizState={setQuizState}
                quizState={quizState}
              />
            }
          />
          <Route path={path.register} element={<RegisterPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
