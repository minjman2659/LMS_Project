import { Typography, Card, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import path from "../lib/path";
import axios from "axios";
axios.defaults.withCredentials = true;

const StyledCard = styled(Card)`
  width: 700px;
  height: 450px;
`;

const { IMP } = window;
IMP.init("imp05951708");

const CourseInfoPage = ({
  userInfo,
  isLogin,
  myCourses,
  setMyCourses,
  courseState,
}) => {
  const url = process.env.REACT_APP_API_URL || "http://localhost:4000";
  const navigate = useNavigate();

  const check = (courseId) => {
    const filterBy = myCourses.filter((el) => el.courseId === courseId);
    return filterBy.length === 0;
  }

  const requestPay = (userInfo, courseState) => {
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: courseState.title,
        amount: 50000,
        buyer_email: userInfo.email,
        buyer_name: userInfo.username,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 마포구",
        buyer_postcode: "01181",
      },
      async (rsp) => {
        // callback
        const copied = myCourses.slice();
        copied.push(courseState);
        setMyCourses(copied);
        if (rsp.success) {
          // 결제 성공 시 로직,
          alert("결제 완료했습니다. 마이 페이지로 이동합니다.");
          await axios.post(`${url}/api/v1/me/courses/`, {
            courseId: courseState.courseId,
            title: courseState.title,
            description: courseState.description,
            imageUrl: courseState.imageUrl,
            courseInfoUrl: courseState.courseInfoUrl,
          });
          navigate(path.myCourses);
        } else {
          // 결제 실패 시 로직,
          alert("이번만 넘어갑니다.");
          alert("마이페이지로 이동합니다.");
          await axios.post(`${url}/api/v1/me/courses/`, {
            courseId: courseState.courseId,
            title: courseState.title,
            description: courseState.description,
            imageUrl: courseState.imageUrl,
            courseInfoUrl: courseState.courseInfoUrl,
          });
          navigate(path.myCourses);
        }
      }
    );
  };

  return (
    <>
      <StyledCard
        hoverable
        cover={<img height="350" alt="card" src={courseState.courseInfoUrl} />}
      >
        <Card.Meta
          title={courseState.title}
          description={courseState.description}
        />
      </StyledCard>
      <Row gutter={16} justify="center" style={{ marginTop: 20 }}>
        <Col span={12}>
          <Typography.Text style={{ fontSize: 24 }}>50,000원</Typography.Text>
        </Col>
        <Col span={12}>
          <Button
            style={{ width: "100%" }}
            onClick={() =>
              !check(courseState.courseId) ? alert("이미 결제한 강의입니다.") :
              isLogin ? requestPay(userInfo, courseState) : navigate(path.login)
            }
          >
            결제하기
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CourseInfoPage;
