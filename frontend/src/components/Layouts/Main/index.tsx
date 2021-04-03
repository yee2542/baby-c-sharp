import { Col, Row } from "antd";
import React from "react";
import { LinkBar } from "../../LinkBar";

const SearchLayout = () => (
  <Row justify="center">
    <Col span={20}>
      <LinkBar />
    </Col>
  </Row>
);

const MainLayout: React.FC = (props) => {
  return (
    <div style={{ padding: 14 }}>
      <SearchLayout />
      {props.children}
    </div>
  );
};

export default MainLayout;
