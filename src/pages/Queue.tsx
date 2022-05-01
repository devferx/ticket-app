import { Card, Col, List, Row, Tag, Typography, Divider } from "antd";

const { Title, Text } = Typography;

const data = [
  {
    ticketNum: 33,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNum: 34,
    desk: 4,
    agent: "Melissa Flores",
  },
  {
    ticketNum: 35,
    desk: 5,
    agent: "Carlos Castro",
  },
  {
    ticketNum: 36,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNum: 37,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNum: 38,
    desk: 2,
    agent: "Melissa Flores",
  },
  {
    ticketNum: 39,
    desk: 5,
    agent: "Carlos Castro",
  },
];

export const Queue = () => {
  return (
    <>
      <Title level={1}>Serving the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Desk: {item.desk}</Tag>,
                  ]}
                >
                  <Title>Num. {item.ticketNum}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket num. ${item.ticketNum}`}
                  description={
                    <>
                      <Text type="secondary">On desk: </Text>
                      <Tag color="magenta">{item.ticketNum}</Tag>
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
