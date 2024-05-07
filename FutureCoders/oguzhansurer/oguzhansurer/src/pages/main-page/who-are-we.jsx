import React from "react";
import { Collapse } from "antd";

const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus? Minima nam quis sapiente placeat, pariatur officia veritatis facere enim expedita id vitae harum, maxime eligendi perferendis sequi nobis nemo.

`;
const items = [
  {
    key: "1",
    label: "Biz Kimiz",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Bizim Amacımız",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Bizim Hedefimiz",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "HEADER 4",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "HEADER 5",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "HEADER 6",
    children: <p>{text}</p>,
  },
  {
    key: "7",
    label: "HEADER 7",
    children: <p>{text}</p>,
  },
  {
    key: "8",
    label: "HEADER 8",
    children: <p>{text}</p>,
  },
];

const WhoAreWe = () => {
  return (
    <Collapse
      style={{ backgroundColor: "white", width: "100%" }}
      items={items}
      defaultActiveKey={["1"]}
    />
  );
};

export default WhoAreWe;
