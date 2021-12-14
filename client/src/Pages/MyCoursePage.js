import { Row, Col, Typography, Card } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import "antd/dist/antd.css";
import path from "../lib/path";

const StyledCard = styled(Card)`
  max-height: 440px;
  max-width: 520px;
`;

const MyCoursePage = ({ myCourses, setIsCourseState }) => {
  const navigator = useNavigate();

  return (
    <>
      <Typography.Title>My Courses</Typography.Title>
      {myCourses.length === 0 ? (
        <h1 style={{ marginTop: 150, color: "gray" }}>Empty</h1>
      ) : (
        <Row style={{ marginTop: 30 }} gutter={24}>
          {myCourses.map((course, index) => (
            <Col key={index}>
              <StyledCard
                hoverable
                style={{ width: 240 }}
                cover={<img alt={course.alt} src={course.imageUrl} />}
                onClick={() => {
                  setIsCourseState(course);
                  navigator(path.courseDetail);
                }}
              >
                <Meta title={course.title} description={course.description} />
              </StyledCard>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default MyCoursePage;
