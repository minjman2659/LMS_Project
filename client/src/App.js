import { useState, useEffect } from "react";
import { Col, Layout, Row, Typography } from "antd";
import styled from "styled-components";
import {
  GithubOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import "antd/dist/antd.css";
import AppRouter from "./routers/AppRouter";
import path from "./lib/path";
import axios from "axios";
axios.defaults.withCredentials = true;

const StyledLayout = styled(Layout)`
  height: 100vh;
  background-color: #fff;
`;
const StyledHeader = styled(Layout.Header)`
  background-color: #fff;
`;
const StyledContent = styled(Layout.Content)`
  padding-top: 100px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  const url = process.env.REACT_APP_API_URL || "http://localhost:4000";
  const navigator = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setIsUserInfo] = useState({});
  const [myCourses, setIsMyCourses] = useState([]);
  const [courseState, setIsCourseState] = useState({});

  useEffect(() => {
    const urlA = process.env.REACT_APP_API_URL || "http://localhost:4000";
    const getData = async () => {
      const courseData = await axios.get(
        `${urlA}/api/v1/courses/${userInfo.id}`
      );
      setIsMyCourses(courseData.data.courses);
    };
    if (JSON.parse(localStorage.getItem("userInfo"))) {
      setIsLogin(true);
      setIsUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      getData();
    } else {
      setIsLogin(false);
      setIsUserInfo({});
    }
  }, [userInfo.id, setIsMyCourses]);

  const logout = async () => {
    try {
      await axios.post(`${url}/api/v1/auth/logout`, null);
      setIsLogin(false);
      localStorage.clear();
      setIsUserInfo({});
      setIsMyCourses([]);
      setIsCourseState({});
      alert("로그아웃 되었습니다.");
      navigator(path.main);
    } catch (err) {
      console.log(err);
      setIsLogin(false);
      localStorage.clear();
      setIsUserInfo({});
      setIsMyCourses([]);
      setIsCourseState({});
      alert("다시 시도해주세요");
      navigator(path.main);
    }
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <Row justify="space-between">
          <Col>
            <Row>
              <Link to={path.main}>
                <Typography.Text style={{ fontSize: "large" }}>
                  Courses
                </Typography.Text>
              </Link>
            </Row>
          </Col>
          <Col>
            {/* TODO : 로그인 성공하면 아이콘 변경 */}
            {isLogin ? (
              <>
                <Row>
                  <Col>
                    <Link to={path.myCourses}>
                      <Typography.Text
                        style={{
                          cursor: "pointer",
                          fontSize: "large",
                          marginRight: 25,
                        }}
                      >
                        My Courses
                      </Typography.Text>
                    </Link>
                  </Col>
                  <Col>
                    <UserDeleteOutlined style={{ marginRight: 8 }} />
                    <Typography.Text
                      style={{ cursor: "pointer", fontSize: "large" }}
                      onClick={() => logout()}
                    >
                      Log out
                    </Typography.Text>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <UserOutlined style={{ marginRight: 8 }} />
                <Link to={path.login}>
                  <Typography.Text style={{ fontSize: "large" }}>
                    Log in
                  </Typography.Text>
                </Link>
              </>
            )}
          </Col>
        </Row>
      </StyledHeader>
      <StyledContent>
        <AppRouter
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          userInfo={userInfo}
          setIsUserInfo={setIsUserInfo}
          myCourses={myCourses}
          setIsMyCourses={setIsMyCourses}
          courseState={courseState}
          setIsCourseState={setIsCourseState}
        />
      </StyledContent>
      <Layout.Footer style={{}}>
        <Row justify="space-between">
          <Typography>© 2021 MinJae Kim. All rights reserved.</Typography>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/minjman2659/LMS_Project"
          >
            <GithubOutlined style={{ fontSize: 24, cursor: "pointer" }} />
          </a>
        </Row>
      </Layout.Footer>
    </StyledLayout>
  );
}

export default App;
