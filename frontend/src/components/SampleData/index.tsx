import React from "react";
import Highlight from "react-highlight";
import Tags from "../Tags";

const SampleData: React.FC<{
  language: "javascript" | "json" | "xml";
  data: string;
}> = (props) => {
  return (
    <>
      <Tags tags={[props.language]} />
      <Highlight innerHTML={false}>{`${props.data}`}</Highlight>
    </>
  );
};

export default SampleData;
