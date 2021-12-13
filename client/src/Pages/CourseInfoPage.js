import { Typography, Card, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import path from "../lib/path";

const StyledCard = styled(Card)`
  width: 700px;
  height: 450px;
`;

const CourseInfoPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledCard
        hoverable
        cover={
          <img
            height="350"
            alt="card"
            src="https://media.discordapp.net/attachments/885202056355397686/919804133513506886/unknown.png?width=1920&height=878"
          />
        }
      >
        <Card.Meta
          title="[풀스택] 유튜브 클론코딩"
          description="프론트와 백엔드, 그리고 배포까지! 모든 과정을 한 강의에 담았다."
        />
      </StyledCard>
      <Row gutter={16} justify="center" style={{ marginTop: 20 }}>
        <Col span={12}>
          <Typography.Text style={{ fontSize: 24 }}>50,000원</Typography.Text>
        </Col>
        <Col span={12}>
          <Button
            style={{ width: "100%" }}
            onClick={() => navigate(path.courseDetail)}
          >
            결제하기
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CourseInfoPage;
