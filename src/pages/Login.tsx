import { SaveOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber } from "antd";

export const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
        label="Desktop"
        name="deksktop"
        rules={[
          { required: true, message: "Please input your desktop number" },
        ]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
        <Button type="primary" htmlType="submit" shape="round">
          <SaveOutlined /> Login
        </Button>
      </Form.Item>
    </Form>
  );
};
