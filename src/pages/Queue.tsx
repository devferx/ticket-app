import { useContext, useEffect, useState } from "react";
import { Card, Col, List, Row, Tag, Typography, Divider } from "antd";

import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { Ticket } from "../interface/ticket";
import { getLast } from "../helpers/getLast";

const { Title, Text } = Typography;

export const Queue = () => {
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  useHideMenu(true);

  useEffect(() => {
    getLast().then((lastTickets) => setTickets(lastTickets));
  }, []);

  useEffect(() => {
    socket.on("assigned-tickets", (assignedTickets: Ticket[]) => {
      setTickets(assignedTickets);
    });

    return () => {
      socket.off("assigned-tickets");
    };
  }, [socket]);

  return (
    <>
      <Title level={1}>Serving the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Desk: {item.desk}</Tag>,
                  ]}
                >
                  <Title>Num. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket num. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">On desk: </Text>
                      <Tag color="magenta">{item.number}</Tag>
                      <Text type="secondary">Agent: </Text>
                      <Tag color="volcano">{item.agent}</Tag>
                    </>
                  }
                ></List.Item.Meta>
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
};
