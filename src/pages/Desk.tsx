import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Divider, Row, Typography } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";

import { SocketContext } from "../context/SocketContext";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";
import { Ticket } from "../interface/ticket";

const { Title, Text } = Typography;

export const Desk = () => {
  const [user] = useState(getUserStorage());
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<Ticket | null>();
  const navigate = useNavigate();
  useHideMenu(false);

  const closeSession = () => {
    localStorage.removeItem("agent");
    localStorage.removeItem("desk");

    navigate("/login");
  };

  const nextTicket = () => {
    socket.emit("next-ticket-to-attend", user, (ticket: Ticket) => {
      setTicket(ticket);
    });
  };

  if (!user.agent || !user.desk) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working in desk: </Text>
          <Text type="success">{user.desk}</Text>
        </Col>

        <Col span={4} style={{ display: "flex" }}>
          <div style={{ flex: 1 }}></div>
          <Button shape="round" type="primary" danger onClick={closeSession}>
            <CloseCircleOutlined /> Close
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticket && (
        <Row>
          <Col>
            <Text>You are attending ticket number: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}

      <Row>
        <Col style={{ display: "flex" }} offset={18} span={6}>
          <div style={{ flex: 1 }}></div>
          <Button shape="round" type="primary" onClick={nextTicket}>
            <RightOutlined /> Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
