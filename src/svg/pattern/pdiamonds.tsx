import React from "react";
import Diamond from "../elem/diamond";

interface IPDiamondsProps {
  /** width to fill*/
  width: number;

  /** height to fill */
  height: number;

  /** central point */
  x: number;

  /** central point */
  y: number;

  /** horizontal size */
  f: number;

  /** vertical size */
  g: number;

  /** circle color */
  color: string;
}

const PDiamonds = (props: IPDiamondsProps) => {
  return (
    <pattern
      id={"diamonds"}
      width={props.width}
      height={props.height}
      patternUnits={"userSpaceOnUse"}
    >
      <Diamond
        x={props.x}
        y={props.y}
        width={props.f}
        height={props.g}
        fill={props.color}
        stroke={"#000"}
        strokeWidth={1}
      />
    </pattern>
  )

}

export default PDiamonds;
