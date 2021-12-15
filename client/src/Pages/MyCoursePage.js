import { Row, Col, Typography, Card, Empty } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import "antd/dist/antd.css";
import path from "../lib/path";

const StyledCard = styled(Card)`
  max-height: 440px;
  max-width: 520px;
`;

const MyCoursePage = ({ myCourses, setCourseState }) => {
  const navigator = useNavigate();

  return (
    <>
      <Typography.Title>My Courses</Typography.Title>
      {myCourses.length === 0 ? (
        <Empty style={{ marginTop: 150 }} />
      ) : (
        <Row style={{ marginTop: 60 }} gutter={24}>
          {myCourses.map((course, index) => (
            <Col key={index}>
              <StyledCard
                hoverable
                style={{ width: 240 }}
                cover={<img alt={course.alt} src={course.imageUrl} />}
                onClick={() => {
                  setCourseState(course);
                  localStorage.removeItem("course");
                  localStorage.setItem("course", JSON.stringify(course));
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
