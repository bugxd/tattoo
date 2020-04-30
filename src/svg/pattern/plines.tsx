import React from "react";

interface IPLinesProps {
  /** unique identifier addition*/
  id:string;

  /** width to fill*/
  width: number;

  /** height to fill */
  height: number;

  /** vertical lines */
  vertical?: boolean;

  /** horizontal lines */
  horizontal?: boolean;

  /**
  * stroke widht
  * @default 1
  */
  strokeWidth?: number;
  /** circle color */
  color: string;
}

const PLines = (props: IPLinesProps) => {
  const direction = () => {
    if(props.vertical && props.horizontal){
      return "M " + (props.width/2) + ",0 v " + props.height + " M 0," + (props.height/2) + " h " + props.width;;
    }

    if(props.vertical){
      return "M " + (props.width/2) + ",0 v " + props.height;
    }

    if(props.horizontal) {
      return "M 0," + (props.height/2) + " h " + props.width;
    }

    return "M 0," + (props.height/2) + " h " + props.width;
  }

  const style = {
    stroke: props.color,
    strokeWidth: props.strokeWidth? props.strokeWidth : 1
  }

  return (
    <pattern
      id={"lines"+props.id}
      width={props.width}
      height={props.height}
      patternUnits={"userSpaceOnUse"}
    >
      <path
        d={direction()}
        {...style}
      />
    </pattern>
  )

}

export default PLines;
