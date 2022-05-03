import { useContext, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button } from "antd";

import { SocketContext } from "../context/SocketContext";
import { useHideMenu } from "../hooks/useHideMenu";
import { Ticket } from "../interface/ticket";

const { Title, Text } = Typography;

export const CreateTicket = () => {
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<Ticket | null>();
  useHideMenu(true);

  const generateTicket = () => {
    socket.emit("get-ticket", null, (ticket: Ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col className="center-content-col" span={14} offset={6}>
          <Title style={{ textAlign: "center" }}>
            Click the button to create a ticket
          </Title>

          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={generateTicket}
            icon={<DownloadOutlined />}
          >
            New Ticket
          </Button>
        </Col>
      </Row>

      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col className="center-content-col" span={14} offset={6}>
            <Text>Your number</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
