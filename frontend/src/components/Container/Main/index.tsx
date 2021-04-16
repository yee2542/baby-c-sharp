import { Col, Divider, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SAMPLE_ELEMENT,
  SAMPLE_TAGS,
} from "../../../common/constants/mock.data";
import { Store } from "../../../common/stores";
import { dataActions } from "../../../common/stores/reducers/data/data.slice";
import DataElement from "../../DataElement";
import { LinkBar } from "../../LinkBar";
import Loading from "../../Loading";
import SampleData from "../../SampleData";
import SearchBar from "../../SearchBar";
import Tags from "../../Tags";

const GetContainer: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <LinkBar />
      </Col>
    </Row>
  );
};

const MetaContainer: React.FC = () => {
  const loading = useSelector((s: Store) => s.dataReducer.loading);
  const tags = useSelector((s: Store) => s.dataReducer.keys);
  const sample = useSelector((s: Store) => s.dataReducer.sample);
  return (
    <Row justify="space-between">
      {loading && <Loading />}
      {!loading && (
        <>
          <Col span={12}>
            <Divider orientation="left">Keys</Divider>
            <Tags tags={tags} />
          </Col>
          <Col span={12}>
            <Divider orientation="left">Sample Data</Divider>
            <SampleData
              language="json"
              data={JSON.stringify(sample, null, 2)}
            />
          </Col>
        </>
      )}
    </Row>
  );
};

const DataContainer: React.FC = () => {
  const loading = useSelector((s: Store) => s.dataReducer.loading);
  const dataElement = useSelector((s: Store) => s.dataReducer.data);
  return (
    <Row gutter={[16, 16]}>
      <Divider orientation="left">Results</Divider>
      <Col span={24}>
        <SearchBar />
      </Col>

      {loading && <Loading />}

      {!loading &&
        dataElement.map(() => (
          <Col key={Math.random().toString()} xs={24} sm={8} md={6} lg={4}>
            <DataElement data={SAMPLE_ELEMENT} />
          </Col>
        ))}
    </Row>
  );
};

const MainContainer: React.FC = (props) => {
  const dispatch = useDispatch();

  // first mount
  useEffect(() => {
    dispatch(dataActions.init());
    dispatch(dataActions.fetching());
    const mockElement = Array(10).fill(SAMPLE_ELEMENT);
    setTimeout(
      () =>
        dispatch(
          dataActions.load({
            data: mockElement,
            sample: SAMPLE_ELEMENT,
            keys: SAMPLE_TAGS,
          })
        ),
      1500
    );
  }, [dispatch]);

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
