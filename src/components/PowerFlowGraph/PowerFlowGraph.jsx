import XArrow, { Xwrapper } from "react-xarrows";
import CustomBlocks from "./CustomBlocks";
import { useMemo } from "react";
import { arrowConfig } from "../../constant/index";

const PowerFlowGraph = () => {
  const boxStyles = [
    {
      id: "element1",
      style: {
        top: "100px",
        left: "300px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        position: "absolute",
        border: "3px solid red",
      },
      arrowStyle: {
        ...arrowConfig,
        lineColor: "red",
        headColor: "red",
        tailColor: "red",
      },
    },
    {
      id: "element2",
      style: {
        top: "300px",
        left: "300px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        position: "absolute",
        border: "3px solid blue",
      },
      arrowStyle: {
        ...arrowConfig,
        lineColor: "blue",
        headColor: "blue",
        tailColor: "blue",
      },
    },
    {
      id: "element3",
      style: {
        top: "300px",
        left: "700px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        position: "absolute",
        border: "3px solid gray",
      },
      arrowStyle: {
        ...arrowConfig,
        lineColor: "gray",
        headColor: "gray",
        tailColor: "gray",
        showHead: false,
        showTail: true,
      },
    },
    {
      id: "element4",
      style: {
        top: "100px",
        left: "500px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        position: "absolute",
        border: "3px solid orange",
      },
      arrowStyle: {
        ...arrowConfig,
        lineColor: "orange",
        headColor: "orange",
        tailColor: "orange",
        showHead: false,
        showTail: true,
      },
    },
    {
      id: "element5",
      style: {
        top: "100px",
        left: "700px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        position: "absolute",
        border: "3px solid green",
      },
      arrowStyle: {
        ...arrowConfig,
        lineColor: "green",
        headColor: "green",
        tailColor: "green",
      },
    },
    {
      id: "element6",
      style: {
        top: "500px",
        left: "500px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        position: "absolute",
        border: "3px solid #f15223",
      },
      arrowStyle: {
        ...arrowConfig,
        lineColor: "#f15223",
        headColor: "#f15223",
        tailColor: "#f15223",
      },
    },
  ];

  const arrowConnections = useMemo(
    () => [
      { start: "element1", end: "element2", reverseDirection: false },
      { start: "element2", end: "element3", reverseDirection: false },
      { start: "element2", end: "element4", reverseDirection: true },
      { start: "element3", end: "element4", reverseDirection: true },
      { start: "element3", end: "element5", reverseDirection: false },
      { start: "element2", end: "element6", reverseDirection: false },
    ],
    []
  );

  return (
    <div className="powerFlow py-3">
      <h1>Power Flow Card</h1>
      <div>
        <Xwrapper>
          {boxStyles.map(({ id, style }) => (
            <CustomBlocks key={id} id={id} boxStyle={style} />
          ))}
          {arrowConnections.map((connection, index) => (
            <div
              key={index}
              className={`${
                connection?.reverseDirection
                  ? "arrow-reverse-animation"
                  : "arrow-animation"
              }`}
            >
              <XArrow
                {...connection}
                {...boxStyles[index].arrowStyle}
                dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
              />
            </div>
          ))}
        </Xwrapper>
      </div>
    </div>
  );
};

export default PowerFlowGraph;
