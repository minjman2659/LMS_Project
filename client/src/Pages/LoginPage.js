import { GoogleOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item style={{ justifyContent: "center" }}>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
      <Button icon={<GoogleOutlined />}>구글로 3초만에 로그인하기</Button>
    </Form>
  );
};

export default LoginPage;
