import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Login",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Queue",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Create Ticket",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
