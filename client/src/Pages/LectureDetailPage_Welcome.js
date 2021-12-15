import { Card, Collapse, Col, Row, Typography, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";
import { useEffect, useRef } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { Paragraph, Text } = Typography;

const Container = styled.div`
  width: 1080px;
`;

const LectureDetailPageWelcome = ({
  setWelcomeState,
  welcomeState,
  movieState,
  imageState,
}) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const onChange = (e) => {
    if (e.target.checked) {
      setWelcomeState(true);
      localStorage.setItem("welcomeState", "true");
    } else {
      setWelcomeState(null);
      localStorage.removeItem("welcomeState");
    }
  };

  const handleScroll = (e) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 150 &&
      !ref.current.checked
    ) {
      // 페이지 끝에 도달
      console.log("도달");
      ref.current.checked = true;
      setWelcomeState(true);
      localStorage.setItem("welcomeState", "true");
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
                  ref={ref}
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={welcomeState ? "checked" : ""}
                  onChange={onChange}
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
            </Panel>
          </Collapse>
        </Col>
        <Col span={16}>
          <Typography.Title style={{ textAlign: "left" }}>
            #0.0 Welcome!
          </Typography.Title>
          <Card
            hoverable
            cover={<img alt="card" src="https://bit.ly/3GJw9oq" />}
            style={{ width: 700, height: 300 }}
          ></Card>
          <Col style={{ textAlign: "left" }}>
            <Paragraph style={{ marginTop: 30 }}>
              In the process of internal desktop applications development, many
              different design specs and implementations would be involved,
              which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design
              language for background applications, is refined by Ant UED Team,
              which aims to{" "}
              <Text strong>
                uniform the user interface specs for internal background
                projects, lower the unnecessary cost of design differences and
                implementation and liberate the resources of design and
                front-end development
              </Text>
              .
            </Paragraph>
            <Typography.Title level={2}>
              Guidelines and Resources
            </Typography.Title>
            <Paragraph>
              We supply a series of design principles, practical patterns and
              high quality design resources (<Text code>Sketch</Text> and{" "}
              <Text code>Axure</Text>), to help people create their product
              prototypes beautifully and efficiently.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design
              language for background applications, is refined by Ant UED Team,
              which aims to{" "}
              <Text strong>
                uniform the user interface specs for internal background
                projects, lower the unnecessary cost of design differences and
                implementation and liberate the resources of design and
                front-end development
              </Text>
              .
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design
              language for background applications, is refined by Ant UED Team,
              which aims to{" "}
              <Text strong>
                uniform the user interface specs for internal background
                projects, lower the unnecessary cost of design differences and
                implementation and liberate the resources of design and
                front-end development
              </Text>
              .
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design
              language for background applications, is refined by Ant UED Team,
              which aims to{" "}
              <Text strong>
                uniform the user interface specs for internal background
                projects, lower the unnecessary cost of design differences and
                implementation and liberate the resources of design and
                front-end development
              </Text>
              .
            </Paragraph>
            <Paragraph style={{ marginBottom: 50 }}>
              After massive project practice and summaries, Ant Design, a design
              language for background applications, is refined by Ant UED Team,
              which aims to{" "}
              <Text strong>
                uniform the user interface specs for internal background
                projects, lower the unnecessary cost of design differences and
                implementation and liberate the resources of design and
                front-end development
              </Text>
              .
            </Paragraph>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPageWelcome;
