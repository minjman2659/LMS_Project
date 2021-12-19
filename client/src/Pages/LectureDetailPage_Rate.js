import { Collapse, Col, Row, Typography, Button, Rate, Input } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";
import { useState, useRef } from "react";
import { ArrowLeftOutlined, StarFilled } from "@ant-design/icons";

const { Panel } = Collapse;
const { TextArea } = Input;
const { Paragraph } = Typography;

const Container = styled.div`
  width: 1080px;
`;

const LectureDetailPageRate = ({
  setRateState,
  welcomeState,
  movieState,
  imageState,
  rateState,
  quizState,
}) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const ref = useRef(null);

  const onChange = (e) => {
    if (e.target.checked) {
      setRateState(true);
      localStorage.setItem("rateState", "true");
    } else {
      setRateState(null);
      localStorage.removeItem("rateState");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.length === 0) {
      alert("Please write something");
    } else {
      if (!ref.current.checked) {
        ref.current.checked = true;
        setRateState(true);
        localStorage.setItem("rateState", "true");
      }
      setText("");
      alert("Thank You!");
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
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => navigate(path.lectureDetail_rate)}
                >
                  #2.0 Let us know what you think
                </Typography.Text>
                <input
                  ref={ref}
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={rateState ? "checked" : ""}
                  onChange={onChange}
                />
              </Row>
            </Panel>
          </Collapse>
        </Col>
        <Col span={16}>
          <Typography.Title style={{ textAlign: "left" }}>
            #2.0 Let us know what you think
          </Typography.Title>
          <Typography.Title
            level={4}
            style={{ textAlign: "left", marginTop: 40 }}
          >
            Before you go, please take a moment to rate this course.
          </Typography.Title>
          <hr style={{ border: "solid 0.1px #E2E2E2" }} />
          <Rate
            allowHalf
            defaultValue={2.5}
            character={(el) => (
              <StarFilled
                style={{ fontSize: "80px", width: 100, marginTop: 30 }}
              />
            )}
          />
          <Typography.Title
            level={4}
            style={{ textAlign: "left", marginTop: 90 }}
          >
            How can we be better?
          </Typography.Title>
          <hr style={{ border: "solid 0.1px #E2E2E2" }} />
          <Paragraph style={{ marginTop: 15, textAlign: "left" }}>
            Our learning experience team invites your honest feedback about this
            course. What worked well for you? Where did we miss the mark? Please
            submit your comments in the space below. We'll review it carefully
            and use it to inform the improvement of our learning experiences.
          </Paragraph>
          <Paragraph style={{ marginTop: 15, textAlign: "left" }}>
            If you have no feedback at this time, you can simply type "N/A" and
            then submit your survey. Thank you!
          </Paragraph>
          <TextArea
            rows={4}
            type="text"
            value={text}
            style={{ marginBottom: 30 }}
            onChange={handleChange}
          />
          <Button
            type="primary"
            block
            style={{ marginBottom: 60, width: 150 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPageRate;
