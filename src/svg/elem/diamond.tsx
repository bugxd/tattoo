import React from "react";
import {IStyleProps} from "../svg"

interface IDiamondProps extends IStyleProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Diamond = (props: IDiamondProps) => {
  const points = "" + (props.x - props.width/2) + "," + (props.y) +
                 " " + (props.x) + "," + (props.y + props.height/2) +
                 " " + (props.x + props.width/2) + "," + (props.y) +
                 " " + (props.x) + "," + (props.y - props.height/2);

  return (
    <polygon
      points={points}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fillOpacity={props.fillOpacity}
      strokeOpacity={props.strokeOpacity}
      strokeLinecap={props.strokeLinecap}
    />
  )
}

export default Diamond;
