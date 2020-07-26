import React from "react";
import {IStyleProps} from "../svg"

interface ISpiralProps extends IStyleProps {
  x: number;
  y: number;
  size: number;
  iterations: number;
}

const Spiral = (props: ISpiralProps) => {
  const path = () => {
    const s = props.size/2;
    let d = "M " + (props.x-s) + " " + (props.y-s);

    let dist = props.size / props.iterations;
    let i = 0;
    for(i; i<props.iterations; i++){
      d = d + " H " + (props.x + s - (dist*i));
      d = d + " V " + (props.y - s - (dist*i));
      d = d + " H " + (props.x - s - (dist*i));
      d = d + " V " + (props.y + s - (dist*i));
    }

    console.log(d);

    return d;
  }

  return (
    <path
      d={path()}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fillOpacity={props.fillOpacity}
      strokeOpacity={props.strokeOpacity}
      strokeLinecap={props.strokeLinecap}
    />
  )
}

export default Spiral;
