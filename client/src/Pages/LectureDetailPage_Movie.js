import { Collapse, Col, Row, Typography, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const { Panel } = Collapse;

const Container = styled.div`
  width: 1080px;
`;

const LectureDetailPageMovie = ({
  welcomeState,
  movieState,
  setMovieState,
  imageState,
}) => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const ref = useRef(null);
  const isVideoEnd = document.getElementsByClassName("video");
  isVideoEnd.addEventListener()
  // setInterval(() => {
  //   console.log(isVideoEnd);
  // }, 5000);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL || "http://localhost:4000";
    setMovie(`${url}/movies/course-movie.mp4`);
  }, []);

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
                  ref={ref}
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
          <video
            className="video"
            style={{ height: 480, width: 720, marginBottom: 50 }}
            controls
            autobuffer="true"
          >
            <source src={movie} type="video/mp4"></source>
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPageMovie;
