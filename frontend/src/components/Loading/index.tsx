import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Icon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading: React.FC = () => {
  return <Spin indicator={Icon} />;
};

export default Loading;
