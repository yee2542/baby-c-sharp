import { Col, Divider, Row } from "antd";
import React from "react";
import {
  SAMPLE_DATA,
  SAMPLE_ELEMENT,
  SAMPLE_TAGS,
} from "../../../common/constants/mock.data";
import DataElement from "../../DataElement";
import { LinkBar } from "../../LinkBar";
import SampleData from "../../SampleData";
import SearchBar from "../../SearchBar";
import Tags from "../../Tags";

const GetContainer: React.FC = () => (
  <Row justify="center">
    <Col span={24}>
      <LinkBar />
    </Col>
  </Row>
);

const MetaContainer: React.FC = () => (
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

const DataContainer: React.FC = () => (
  <Row gutter={[16, 16]}>
    <Divider orientation="left">Results</Divider>
    <Col span={24}>
      <SearchBar />
    </Col>

    {Array(10)
      .fill(0)
      .map(() => (
        <Col key={Math.random().toString()} xs={24} sm={8} md={6} lg={4}>
          <DataElement data={SAMPLE_ELEMENT} />
        </Col>
      ))}
  </Row>
);

const MainContainer: React.FC = (props) => {
  return (
    <div style={{ padding: 14 }}>
      <GetContainer />
      <MetaContainer />
      <DataContainer />
      {props.children}
    </div>
  );
};

export default MainContainer;
