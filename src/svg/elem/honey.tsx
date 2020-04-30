import React from "react";
import {IStyleProps} from "../svg"

interface IHoneyProps extends IStyleProps {
  x: number;
  y: number;
}

const Honey = (props: IHoneyProps) => {
  const points = "" + (45+ props.x) +"," + (52+props.y) +
                " " + (60+props.x) + "," + (26+props.y) +
                " " + (45+props.x) + "," + (0+props.y) +
                " " + (15+props.x) + "," + (0+props.y) +
                " " + (0+props.x) + "," + (26+props.y) +
                " " + (15+props.x) + "," + (52+props.y);

  return (
    <polygon
      points={points}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fillOpacity={props.fillOpacity}
      strokeOpacity={props.strokeOpacity}
      strokeLinecap={props.strokeLinecap}
      style={{backgroundColor:"#000"}}
    />
  )
}

export default Honey;
