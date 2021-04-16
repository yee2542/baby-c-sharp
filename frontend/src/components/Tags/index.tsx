import React from "react";
import { Tag as TagAntd } from "antd";

const COLOR_LISTS: string[] = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const Tags: React.FC<{ tags: string[] }> = (props) => {
  return (
    <>
      {props.tags.map((el, i) => (
        <TagAntd key={i} color={COLOR_LISTS[i % COLOR_LISTS.length]}>
          {el}
        </TagAntd>
      ))}
    </>
  );
};

export default Tags;
