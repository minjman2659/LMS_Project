import { Collapse, Col, Row, Typography, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";

const { Panel } = Collapse;

const Container = styled.div`
  width: 1080px;
`;

const LectureDetailPageVideo = ({
  welcomeState,
  videoState,
  setVideoState,
  imageState,
  rateState,
  quizState,
}) => {
  const navigate = useNavigate();
  const [video, setVideo] = useState();
  const ref = useRef(null);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL || "http://localhost:4000";
    setVideo(`${url}/videos/course-video.mp4`);
  }, []);

  const onChange = (e) => {
    if (e.target.checked) {
      setVideoState(true);
      localStorage.setItem("videoState", "true");
    } else {
      setVideoState(null);
      localStorage.removeItem("videoState");
    }
  };

  const handleEnded = () => {
    if (!ref.current.checked) {
      ref.current.checked = true;
      setVideoState(true);
      localStorage.setItem("videoState", "true");
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
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => navigate(path.lectureDetail_video)}
                >
                  #1.0 동영상 예시
                </Typography.Text>
                <input
                  ref={ref}
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={videoState ? "checked" : ""}
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
                  onClick={() => navigate(path.lectureDetail_quiz)}
                >
                  #1.2 퀴즈 예시
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={quizState ? "checked" : ""}
                  disabled
                />
              </Row>
            </Panel>
            <Panel header="2. THANK YOU" key="3" style={{ fontWeight: "bold" }}>
              <Row
                justify="space-between"
                style={{ padding: "0 8px", fontWeight: "normal" }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_rate)}
                >
                  #2.0 Let us know what you think
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={rateState ? "checked" : ""}
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
          <video
            className="video"
            style={{ width: 720, height: 540, marginBottom: 60 }}
            controls
            autobuffer="true"
            onEnded={handleEnded}
          >
            <source src={video} type="video/mp4"></source>
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPageVideo;
