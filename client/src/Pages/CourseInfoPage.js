import { Typography, Card, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import path from "../lib/path";

const StyledCard = styled(Card)`
  width: 660px;
  height: 500px;
`;

const CourseInfoPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledCard hoverable cover={<img alt="card" src="" />}>
        <Card.Meta title="카드" description="설명" />
      </StyledCard>
      <Row gutter={16} justify="center" style={{ marginTop: 32 }}>
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
