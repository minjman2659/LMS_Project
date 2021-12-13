import { Card, Collapse, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import path from "../lib/path";

const { Panel } = Collapse;

const Container = styled.div`
  width: 1080px;
`;

const StyledCard = styled(Card)`
  max-height: 200px;
  max-width: 320px;
`;

const CourseDetailPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row gutter={32}>
        <Col span={8}>
          <StyledCard
            hoverable
            cover={
              <img
                alt="card"
                src="https://media.discordapp.net/attachments/885202056355397686/918710553852141628/image.png?width=1664&height=936"
              />
            }
          >
            <Card.Meta
              title="[풀스택] 유튜브 클론코딩"
              description="프론트와 백엔드, 그리고 배포까지!"
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
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                  marginTop: "5px",
                }}
              >
                <Typography.Text>#0.1 동영상 예시</Typography.Text>
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_movie)}
                >
                  Watch now -&gt;
                </Typography.Text>
              </Row>
            </Panel>
            <Panel style={{ fontWeight: "bold" }} header="1. SET UP" key="2">
              <Row
                justify="space-between"
                style={{ padding: "0 8px", fontWeight: "normal" }}
              >
                <Typography.Text>#1.0 이미지 예시</Typography.Text>
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
