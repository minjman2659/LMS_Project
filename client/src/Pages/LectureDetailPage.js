import { Card, Collapse, Col, Row, Typography } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Container = styled.div`
  width: 1080px;
`;

const StyledCard = styled(Card)`
  max-height: 200px;
  max-width: 320px;
`;

const LectureDetailPage = () => {
  return (
    <Container>
      <Row gutter={32}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="card" src="" />}
            style={{ marginBottom: 16 }}
          >
            <Card.Meta title="카드" description="설명" />
          </Card>
          <Collapse defaultActiveKey={["1", "2", "3"]}>
            <Panel header="타이틀" key="1">
              <Row justify="space-between" style={{ padding: "0 8px" }}>
                <Typography.Text>#0.0 무료강의</Typography.Text>
                <Typography.Text style={{ cursor: "pointer" }}>
                  Watch now -&gt;
                </Typography.Text>
              </Row>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <div>{text}</div>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <div>{text}</div>
            </Panel>
          </Collapse>
        </Col>
        <Col span={16}>
          <Typography.Title style={{ textAlign: "left" }}>
            #0.0 Welcome
          </Typography.Title>
          <Card hoverable cover={<img height="250" alt="card" src="" />}>
            <Card.Meta title="카드" description="설명" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LectureDetailPage;
