import React from "react";

interface ISvgProps {
    children?: React.ReactNode[] | React.ReactNode;
}

export const NONE: string = "none";

export interface IStyleProps {
  /** fill none or color */
  fill?: string;

  /** fill opacity */
  fillOpacity?: string;

  /** stroke none or color */
  stroke?: string;

  /** stroke opcity */
  strokeOpacity?: string;

  /** stroke line cap*/
  strokeLinecap?: "butt" | "square" | "round";

  /** stroke-width */
  strokeWidth?: number;

  /** filter */
  filter?: string;
}

const SVG = (props: ISvgProps) => {
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      width={window.innerWidth-20}
      height={window.innerHeight-20}
    >
      {props.children}
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}

export default SVG;
