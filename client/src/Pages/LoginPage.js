import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import path from "../lib/path";
import axios from "axios";
axios.defaults.withCredentials = true;

const LoginPage = ({ setIsLogin = () => {} }) => {
  const navigator = useNavigate();
  const url = process.env.REACT_APP_API_URL || "http://localhost:4000";

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const loginUser = await axios.post(`${url}/api/v1/auth/login`, {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: loginUser.data.id,
          username: loginUser.data.username,
          email: loginUser.data.email,
        })
      );
      setIsLogin(true);
      alert("로그인 되었습니다.");
      navigator(path.main);
    } catch (err) {
      console.log(err);
      alert("다시 로그인 해주세요.");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <br />
        <br />
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
