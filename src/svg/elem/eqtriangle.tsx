import React from "react";
import {IStyleProps} from "../svg"

interface IEQTriangleProps extends IStyleProps {
  x: number;
  y: number;
  size: number;
}

const EQTriangle = (props: IEQTriangleProps) => {
  const factor = 6.6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667
  const points = "" + ((props.size/2)+props.x) + " " + ((props.size/factor)+props.y) +
                 " " + (props.size+props.x) + " " + (props.size+props.y) +
                 " " + (props.x) + " " + (props.size+props.y)

  return (
    <polygon
      points={points}//{"50 15, 100 100, 0 100"}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fillOpacity={props.fillOpacity}
      strokeOpacity={props.strokeOpacity}
      strokeLinecap={props.strokeLinecap}
    />
  )
}

export default EQTriangle;
