import { Typography, Card, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import path from "../lib/path";

const StyledCard = styled(Card)`
  width: 700px;
  height: 450px;
`;

const { IMP } = window;
IMP.init("imp05951708");

const CourseInfoPage = ({ userInfo, isLogin }) => {
  const navigate = useNavigate();

  const requestPay = (userInfo) => {
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "[풀스택] 유튜브 클론코딩",
        amount: 50000,
        buyer_email: userInfo.email,
        buyer_name: userInfo.username,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 마포구",
        buyer_postcode: "01181",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          navigate(path.courseDetail);
        } else {
          // 결제 실패 시 로직,
          alert("이번만 넘어갑니다.");
          navigate(path.courseDetail);
        }
      }
    );
  };

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
            onClick={() =>
              isLogin ? requestPay(userInfo) : navigate(path.login)
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
