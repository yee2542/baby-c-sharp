import { Col, Divider, Row } from "antd";
import React from "react";
import { LinkBar } from "../../LinkBar";
import Tags from "../../Tags";

const SAMPLE_TAGS = ["_id", "createAt", "gender", "updateAt"];

const SearchLayout = () => (
  <Row justify="center">
    <Col span={24}>
      <LinkBar />
    </Col>
  </Row>
);

const MainLayout: React.FC = (props) => {
  return (
    <div style={{ padding: 14 }}>
      <SearchLayout />

      <Row justify="space-between">
        <Col span={12}>
          <Divider orientation="left">Keys</Divider>
          <Tags tags={SAMPLE_TAGS} />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Sample Data</Divider>
        </Col>
      </Row>
      {props.children}
    </div>
  );
};

export default MainLayout;
