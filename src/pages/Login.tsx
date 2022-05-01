import { useNavigate } from "react-router-dom";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const Login = () => {
  const navigate = useNavigate();
  useHideMenu(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate("/desk");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={2}>Login</Title>
      <Text>enter your name and desk number</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent Name"
          name="agent"
          rules={[{ required: true, message: "Please input your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk"
          name="deksk"
          rules={[{ required: true, message: "Please input your desk number" }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined /> Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
