import React from "react";
import Highlight from "react-highlight";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  min-height: 115px;
  border: 1px #d9d9d9 solid;
`;

const DataElement: React.FC<{ data?: Object }> = (props) => {
  const format = JSON.stringify(props.data, null, 2);
  return (
    <Card>
      <Highlight innerHTML={false}>{`${format}`}</Highlight>
    </Card>
  );
};

export default DataElement;
