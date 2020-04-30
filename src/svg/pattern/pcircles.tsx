import React from "react";

interface IPCirclesProps {
  /** width to fill*/
  width: number;

  /** height to fill */
  height: number;

  /** central point */
  cx: number;

  /** central point */
  cy: number;

  /** max size */
  r: number;

  /** circle color */
  color: string;
}

const PCircles = (props: IPCirclesProps) => {
  return (
    <pattern
      id={"circles"}
      width={props.width}
      height={props.height}
      patternUnits="userSpaceOnUse"
    >
      <circle
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        fill={props.color}
      />
    </pattern>
  )

}

export default PCircles;
