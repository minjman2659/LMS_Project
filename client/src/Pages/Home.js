import { Row, Col, Typography, Card } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import "antd/dist/antd.css";
import path from "../lib/path";

const StyledCard = styled(Card)`
  max-height: 200px;
  max-width: 320px;
`;

const Home = () => {
  const navigator = useNavigate();
  const tempCourseData = [
    {
      title: "예시1",
      description: "설명1",
      imageUrl: "",
      alt: "image",
    },
    {
      title: "예시1",
      description: "설명1",
      imageUrl: "",
      alt: "image",
    },
    {
      title: "예시1",
      description: "설명1",
      imageUrl: "",
      alt: "image",
    },
  ];
  return (
    <>
      <Typography.Title>Popular Courses</Typography.Title>
      <Typography>강력 추천하는 베스트 강의</Typography>
      <Row style={{ marginTop: 60 }} gutter={24}>
        {tempCourseData.map((course, index) => (
          <Col key={index}>
            <StyledCard
              hoverable
              style={{ width: 240 }}
              cover={<img alt={course.alt} src={course.imageUrl} />}
              onClick={() => navigator(path.courseInfo)}
            >
              <Meta title={course.title} description={course.description} />
            </StyledCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
