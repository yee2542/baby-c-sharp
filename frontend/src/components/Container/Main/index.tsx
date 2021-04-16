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
  const dispatch = useDispatch();
  const loading = useSelector((s: Store) => s.dataReducer.loading.url);

  const onSearch: (value: string) => void = (value) => {
    dispatch(dataActions.fetchURL(value));
    const mockElement = Array(10).fill(SAMPLE_ELEMENT);
    setTimeout(
      () =>
        dispatch(
          dataActions.loadData({
            data: mockElement,
            sample: SAMPLE_ELEMENT,
            keys: SAMPLE_TAGS,
            search: value,
          })
        ),
      2000
    );
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <LinkBar loading={loading} onSearch={onSearch} />
      </Col>
    </Row>
  );
};

const MetaContainer: React.FC = () => {
  const loading = useSelector((s: Store) => s.dataReducer.loading.url);
  const tags = useSelector((s: Store) => s.dataReducer.keys);
  const sample = useSelector((s: Store) => s.dataReducer.sample);
  return (
    <Row justify="space-between">
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
  const dispatch = useDispatch();

  const loadingData = useSelector((s: Store) => s.dataReducer.loading.data);
  const loadingSearch = useSelector((s: Store) => s.dataReducer.loading.search);
  const dataElement = useSelector((s: Store) => s.dataReducer.data);
  const items = useSelector((s: Store) => s.dataReducer.keys);

  const onSearch: (value: string) => void = (value) => {
    dispatch(dataActions.search(value));
    const mockElement = Array(10).fill(SAMPLE_ELEMENT);
    setTimeout(
      () =>
        dispatch(
          dataActions.loadSearch({
            data: mockElement,
          })
        ),
      2000
    );
  };

  return (
    <Row gutter={[16, 16]}>
      <Divider orientation="left">Results</Divider>
      <Col span={24}>
        <SearchBar loading={loadingSearch} onSearch={onSearch} items={items} />
      </Col>

      {(loadingData || loadingSearch) && <Loading />}

      {(!loadingData || !loadingSearch) &&
        dataElement.map((el) => (
          <Col key={Math.random().toString()} xs={24} sm={8} md={6} lg={4}>
            <DataElement data={el} />
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
