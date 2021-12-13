import { Card, Collapse, Col, Row, Typography } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";

const { Panel } = Collapse;

const Container = styled.div`
  width: 1080px;
`;

// const StyledCard = styled(Card)`
//   max-height: 200px;
//   max-width: 320px;
// `;

const LectureDetailPageImage = () => {
  const navigate = useNavigate();
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
              </Row>
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                  marginTop: "5px",
                }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_movie)}
                >
                  #0.1 동영상 예시
                </Typography.Text>
              </Row>
            </Panel>
            <Panel style={{ fontWeight: "bold" }} header="1. SET UP" key="2">
              <Row
                justify="space-between"
                style={{ padding: "0 8px", fontWeight: "normal" }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_image)}
                >
                  #1.0 이미지 예시
                </Typography.Text>
              </Row>
            </Panel>
          </Collapse>
        </Col>
        <Col span={16}>
          <Typography.Title style={{ textAlign: "left" }}>
            #1.0 이미지 예시
          </Typography.Title>
          <Card hoverable cover={<img height="250" alt="card" src="" />}>
            <Card.Meta title="카드" description="설명" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPageImage;
