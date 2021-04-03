import { Col, Divider, Row } from "antd";
import React from "react";
import { SAMPLE_DATA, SAMPLE_TAGS } from "../../../common/constants/mock.data";
import { LinkBar } from "../../LinkBar";
import SampleData from "../../SampleData";
import SearchBar from "../../SearchBar";
import Tags from "../../Tags";

const GetLayout: React.FC = () => (
  <Row justify="center">
    <Col span={24}>
      <LinkBar />
    </Col>
  </Row>
);

const MetaLayout: React.FC = () => (
  <Row justify="space-between">
    <Col span={12}>
      <Divider orientation="left">Keys</Divider>
      <Tags tags={SAMPLE_TAGS} />
    </Col>
    <Col span={12}>
      <Divider orientation="left">Sample Data</Divider>
      <SampleData language="json" data={SAMPLE_DATA} />
    </Col>
  </Row>
);

const DataLayout: React.FC = () => (
  <Row>
    <Divider orientation="left">Results</Divider>
    <Col span={24}>
      <SearchBar />
    </Col>
  </Row>
);

const MainLayout: React.FC = (props) => {
  return (
    <div style={{ padding: 14 }}>
      <GetLayout />
      <MetaLayout />
      <DataLayout />
      {props.children}
    </div>
  );
};

export default MainLayout;
