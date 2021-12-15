import { Card, Collapse, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import path from "../lib/path";

const { Panel } = Collapse;

const Container = styled.div`
  width: 1080px;
`;

const StyledCard = styled(Card)`
  max-height: 300px;
  max-width: 520px;
`;

const CourseDetailPage = ({ courseState }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row gutter={32}>
        <Col span={8}>
          <StyledCard
            hoverable
            cover={<img alt="card" src={courseState.imageUrl} />}
          >
            <Card.Meta
              title={courseState.title}
              description={courseState.description}
            />
          </StyledCard>
        </Col>
        <Col span={16}>
          <Collapse defaultActiveKey={["1", "2", "3"]}>
            <Panel
              style={{ fontWeight: "bold" }}
              header="0. INTRODUCTION"
              key="1"
            >
              <Row
                justify="space-between"
                style={{ padding: "0 8px", fontWeight: "normal" }}
              >
                <Typography.Text>#0.0 Welcome!</Typography.Text>
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_welcome)}
                >
                  Watch now -&gt;
                </Typography.Text>
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
                <Typography.Text>#1.0 동영상 예시</Typography.Text>
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_movie)}
                >
                  Watch now -&gt;
                </Typography.Text>
              </Row>
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                  marginTop: "8px",
                }}
              >
                <Typography.Text>#1.1 이미지 예시</Typography.Text>
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_image)}
                >
                  Watch now -&gt;
                </Typography.Text>
              </Row>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetailPage;
