import { useContext } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { UiContext } from "../context/UiContext";

import { Login } from "./Login";
import { Queue } from "./Queue";
import { Desk } from "./Desk";
import { CreateTicket } from "./CreateTicket";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { isMenuHide } = useContext(UiContext);

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth={0} breakpoint="md" hidden={isMenuHide}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/login">Login</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/queue">Queue</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/create-ticket">Create Ticket</Link>,
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
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/create-ticket" element={<CreateTicket />} />
              <Route path="/desk" element={<Desk />} />
              <Route path="/*" element={<Login />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
