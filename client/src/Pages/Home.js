import { Row, Col, Typography, Card, Tabs } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import "antd/dist/antd.css";
import path from "../lib/path";
import { best, development, design } from "../mock/courses";

const { TabPane } = Tabs;
const { Title } = Typography;

const StyledCard = styled(Card)`
  max-height: 440px;
  max-width: 520px;
`;

const Home = ({ setIsCourseState }) => {
  const navigator = useNavigate();

  return (
    <>
      <Typography.Title>Courses</Typography.Title>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Best" key="1">
          <Title level={2}>강력 추천하는 베스트 강의</Title>
          <Row style={{ marginTop: 30 }} gutter={24}>
            {best.map((course, index) => (
              <Col key={index}>
                <StyledCard
                  hoverable
                  style={{ width: 440 }}
                  cover={<img alt={course.alt} src={course.imageUrl} />}
                  onClick={() => {
                    setIsCourseState(course);
                    navigator(path.courseInfo);
                  }}
                >
                  <Meta title={course.title} description={course.description} />
                </StyledCard>
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="Development" key="2">
          <Title level={2}>개발에 대한 모든 것</Title>
          <Row style={{ marginTop: 30 }} gutter={24}>
            {development.map((course, index) => (
              <Col key={index}>
                <StyledCard
                  hoverable
                  style={{ width: 440 }}
                  cover={<img alt={course.alt} src={course.imageUrl} />}
                  onClick={() => {
                    setIsCourseState(course);
                    navigator(path.courseInfo);
                  }}
                >
                  <Meta title={course.title} description={course.description} />
                </StyledCard>
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="Design" key="3">
          <Title level={2}>디자인에 대한 모든 것</Title>
          <Row style={{ marginTop: 30 }} gutter={24}>
            {design.map((course, index) => (
              <Col key={index}>
                <StyledCard
                  hoverable
                  style={{ width: 440 }}
                  cover={<img alt={course.alt} src={course.imageUrl} />}
                  onClick={() => {
                    setIsCourseState(course);
                    navigator(path.courseInfo);
                  }}
                >
                  <Meta title={course.title} description={course.description} />
                </StyledCard>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </>
  );
};

export default Home;
