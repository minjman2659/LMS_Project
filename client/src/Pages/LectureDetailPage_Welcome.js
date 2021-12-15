import { Card, Collapse, Col, Row, Typography, Checkbox } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";

const { Panel } = Collapse;
const { Paragraph, Text } = Typography;

const Container = styled.div`
  width: 1080px;
`;

const LectureDetailPageWelcome = () => {
  const navigate = useNavigate();

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Container>
      <Row gutter={32}>
        <Col span={8}>
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
                <Checkbox onChange={onChange} />
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
