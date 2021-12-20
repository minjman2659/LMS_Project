import { Collapse, Col, Row, Typography, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";
import { useRef, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { questions } from "../mock/Question";

const { Panel } = Collapse;
const { Paragraph } = Typography;

const QuizBox = styled.article`
  width: 700px;
  height: 500px;
  margin: auto;
  margin-top: 30px;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #364d79;
  @media screen and (max-width: 700px) {
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
    height: 400px;
  }
`;

const QuizScore = styled.div`
  align-items: center;
  text-align: center;
  word-break: break-all;
  width: 100%;
  > img {
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
  }
  > div {
    height: 200px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > p:nth-child(1) {
      font-size: 17px;
      line-height: 17px;
      padding: 15px 0px;
    }
    > p:nth-child(2) {
      font-size: 12px;
      line-height: 14px;
      padding: 10px 0px;
    }
    > button {
      cursor: pointer;
      margin-top: 10px;
      background-color: #440a67;
      color: #fff;
      border-radius: 50px;
      width: 40%;
      height: 50px;
      font-size: 12px;
      @media only screen and (max-width: 400px) {
        height: 30px;
        font-size: 10px;
      }
    }
  }
`;

const QuizQuestion = styled.div`
  margin-bottom: 20px;
  width: 100%;
  color: #fff;
`;

const QuizChoices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuizCount = styled.div`
  margin-bottom: 20px;
  > span {
    font-size: 28px;
  }
`;

const QuizText = styled.div`
  width: 100%;
  font-size: 20px;
`;

const QuizChoiceButton = styled.button`
  width: 90%;
  height: 70px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 80px;
  display: flex;
  padding: 5px;
  margin-bottom: 10px;
  margin-left: 33px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  @media only screen and (max-width: 600px) {
    height: 50px;
  }
  :hover {
    background-color: tomato;
    color: #fff;
  }
`;

const Container = styled.div`
  width: 1080px;
`;

const LectureDetailPageQuiz = ({
  welcomeState,
  movieState,
  imageState,
  rateState,
  setQuizState,
  quizState,
}) => {
  const navigate = useNavigate();
  const checkRef = useRef(null);
  const [currentQuestion, setCurrentQuestion] = useState(0); // 현재 문제 index
  const [showScore, setShowScore] = useState(false); // 점수 화면 보임 여부
  const [score, setScore] = useState(-1); // 점수 카운트

  const onChange = (e) => {
    if (e.target.checked) {
      setQuizState(true);
      localStorage.setItem("quizState", "true");
    } else {
      setQuizState(null);
      localStorage.removeItem("quizState");
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // 맞다면 점수에 ++1
    }
    const nextQuestion = currentQuestion + 1; // currentQuestion에 다음문제가 있나?
    if (nextQuestion < questions.length) {
      // 다음문제가 있다면
      setCurrentQuestion(nextQuestion); // currentQuestion 정식으로 업데이트
    } else {
      // 다음문제가 없다면
      setShowScore(true); // 점수 보여주기
    }
  };

  return (
    <Container>
      <Row gutter={32}>
        <Col span={8}>
          <Button
            type="primary"
            block
            style={{ marginBottom: 10 }}
            onClick={() => navigate(path.courseDetail)}
          >
            <ArrowLeftOutlined />
            &nbsp;Back to the Course List
          </Button>
          <Collapse defaultActiveKey={["1", "2", "3"]}>
            <Panel
              header="0. INTRODUCTION"
              key="1"
              style={{ fontWeight: "bold" }}
            >
              <Row
                justify="space-between"
                style={{ padding: "0 8px", fontWeight: "normal" }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_welcome)}
                >
                  #0.0 Welcome!
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={welcomeState ? "checked" : ""}
                  disabled
                />
              </Row>
            </Panel>
            <Panel style={{ fontWeight: "bold" }} header="1. SET UP" key="2">
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_movie)}
                >
                  #1.0 동영상 예시
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={movieState ? "checked" : ""}
                  disabled
                />
              </Row>
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                  marginTop: "6px",
                }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_image)}
                >
                  #1.1 이미지 예시
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={imageState ? "checked" : ""}
                  disabled
                />
              </Row>
              <Row
                justify="space-between"
                style={{
                  padding: "0 8px",
                  fontWeight: "normal",
                  marginTop: "6px",
                }}
              >
                <Typography.Text
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => navigate(path.lectureDetail_quiz)}
                >
                  #1.2 퀴즈 예시
                </Typography.Text>
                <input
                  ref={checkRef}
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={quizState ? "checked" : ""}
                  onChange={onChange}
                />
              </Row>
            </Panel>
            <Panel header="2. THANK YOU" key="3" style={{ fontWeight: "bold" }}>
              <Row
                justify="space-between"
                style={{ padding: "0 8px", fontWeight: "normal" }}
              >
                <Typography.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(path.lectureDetail_rate)}
                >
                  #2.0 Let us know what you think
                </Typography.Text>
                <input
                  type="checkbox"
                  style={{ marginTop: 5 }}
                  checked={rateState ? "checked" : ""}
                  disabled
                />
              </Row>
            </Panel>
          </Collapse>
        </Col>
        <Col span={16}>
          <Typography.Title style={{ textAlign: "left" }}>
            #1.2 Quiz
          </Typography.Title>
          <QuizBox>
            {showScore ? ( // 점수 화면 보임 여부가 true라면
              <QuizScore>
                <img src={""} alt="You Quiz?" />
                <div>
                  <p>총 {score}개를 맞추셨습니다!</p>
                </div>
                {/*점수 보여줌 */}
              </QuizScore>
            ) : (
              // 점수 화면 보임 여부가 false 라면(=아직 풀 문제가 남음)
              <>
                <QuizQuestion>
                  {score === -1 ? (
                    <div>
                      <Typography.Title level={1} style={{ color: "#fff" }}>
                        POP Quiz
                      </Typography.Title>
                      <Paragraph
                        style={{
                          fontSize: 20,
                          marginTop: 30,
                          color: "#e9e9e9",
                        }}
                      >
                        문제는 총 3문제가 출제됩니다.
                        <br /> 2문제 이상 맞을 시 통과할 수 있으며,
                        <br /> 재시험을 통해 다시 테스트를 볼 수 있습니다.
                        <br />
                        <br /> Good Luck!
                      </Paragraph>
                    </div>
                  ) : (
                    <QuizCount>
                      <span>Question {currentQuestion}</span>/
                      {questions.length - 1}
                    </QuizCount>
                  )}
                  <QuizText>{questions[currentQuestion].questionText}</QuizText>
                </QuizQuestion>

                {/* 선택지 */}
                <QuizChoices>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, idx) => (
                      <QuizChoiceButton
                        key={idx}
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </QuizChoiceButton>
                    )
                  )}
                </QuizChoices>
              </>
            )}
          </QuizBox>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPageQuiz;
