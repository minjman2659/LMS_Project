import { Col, Layout, Row, Typography } from "antd";
import styled from "styled-components";
import { GithubOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import AppRouter from "./routers/AppRouter";
import path from "./lib/path";

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
  return (
    <StyledLayout>
      <StyledHeader>
        <Row justify="space-between">
          <Col>
            <Row>
              <Link to={path.main}>
                <Typography.Text>Courses</Typography.Text>
              </Link>
            </Row>
          </Col>
          <Col>
            {/* TODO : 로그인 성공하면 아이콘 변경 */}
            <UserDeleteOutlined style={{ marginRight: 8 }} />
            <Link to={path.login}>
              <Typography.Text>Log in</Typography.Text>
            </Link>
          </Col>
        </Row>
      </StyledHeader>
      <StyledContent>
        <AppRouter />
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
