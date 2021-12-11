import { Row, Col, Typography, Card } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import "antd/dist/antd.css";
import path from "../lib/path";

const StyledCard = styled(Card)`
  max-height: 240px;
  max-width: 320px;
`;

const Home = () => {
  const navigator = useNavigate();
  const tempCourseData = [
    {
      title: "코코아톡 클론코딩",
      description: "HTML, CSS, JavaScript",
      imageUrl:
        "https://media.discordapp.net/attachments/885202056355397686/918709142816981073/image.png?width=1664&height=936",
      alt: "image",
    },
    {
      title: "유튜브 클론코딩",
      description: "HTML, CSS, Github",
      imageUrl:
        "https://media.discordapp.net/attachments/885202056355397686/918710553852141628/image.png?width=1664&height=936",
      alt: "image",
    },
    {
      title: "인스타그램 클론코딩",
      description: "백엔드, 프론트엔드, 배포",
      imageUrl:
        "https://media.discordapp.net/attachments/885202056355397686/918710586362167326/image.png?width=1664&height=936",
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
