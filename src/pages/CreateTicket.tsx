import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button } from "antd";

import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const CreateTicket = () => {
  useHideMenu(true);

  const generateTicket = () => {};

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

      <Row style={{ marginTop: 100 }}>
        <Col className="center-content-col" span={14} offset={6}>
          <Text>Your number</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
