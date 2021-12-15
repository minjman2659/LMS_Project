import { Card, Collapse, Col, Row, Typography, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Container = styled.div`
  width: 1080px;
`;

// const StyledCard = styled(Card)`
//   max-height: 200px;
//   max-width: 320px;
// `;

const LectureDetailPageMovie = ({
  welcomeState,
  movieState,
  setMovieState,
  imageState,
}) => {
  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.checked) {
      setMovieState(true);
      localStorage.setItem("movieState", "true");
    } else {
      setMovieState(null);
      localStorage.removeItem("movieState");
    }
  };

  return (
    <Container>
      <Row gutter={32}>
        <Col span={8}>
          <Button
            type="primary"
            block
            style={{ marginBottom: 10 }}
            onClick={() => navigate(path.courseDetail)}
          >
            <ArrowLeftOutlined />
            &nbsp;Back to the Course List
          </Button>
          <Collapse defaultActiveKey={["1", "2", "3"]}>
            <Panel
              header="0. INTRODUCTION"
              key="1"
              style={{ fontWeight: "bold" }}
            >
              <Row
                justify="space-between"
                style={{ padding: "0 8px", fontWeight: "normal" }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_welcome)}
                >
                  #0.0 Welcome!
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={welcomeState ? "checked" : ""}
                  disabled
                />
              </Row>
            </Panel>
            <Panel style={{ fontWeight: "bold" }} header="1. SET UP" key="2">
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_movie)}
                >
                  #1.0 동영상 예시
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={movieState ? "checked" : ""}
                  onChange={onChange}
                />
              </Row>
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                  marginTop: "6px",
                }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_image)}
                >
                  #1.1 이미지 예시
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={imageState ? "checked" : ""}
                  disabled
                />
              </Row>
            </Panel>
          </Collapse>
        </Col>
        <Col span={16}>
          <Typography.Title style={{ textAlign: "left" }}>
            #1.0 동영상 예시
          </Typography.Title>
          <Card hoverable cover={<img height="250" alt="card" src="" />}>
            <Card.Meta title="카드" description="설명" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPageMovie;
