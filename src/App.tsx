import React from 'react';
import SVG from "./svg/svg";
import PCircles from "./svg/pattern/pcircles";
import PDiamonds from "./svg/pattern/pdiamonds";
import PLines from "./svg/pattern/plines";

import Honey from "./svg/elem/honey";

import {NONE} from "./svg/svg";

interface Point {
  x: number;
  y: number;
}

//https://github.com/eskimoblood/gerstnerizer/blob/master/app/geom/hex.js

function App() {
  const calcPoints = (x:number, y:number, r:number): Point[] => {
    var points:Point[] = [];
    for (var i = 0; i < 6; i++) {
      var angle =  Math.PI / 3 * (i + 0.5);
      points.push({
        x: x + r * Math.cos(angle),
        y: y + r * Math.sin(angle)
      });
    }
    return points;
  }

  const grid = () => {
    var grid: React.ReactNode[] = [];
    //var height = 100;
    //var width = Math.sqrt(3) / 2 * height;
    //var vert = 3 / 4 * height;


    var x = 110;//width + i * width + (j % 2) * width / 2;
    var y = 110;//vert + j * vert;
    // center point
    grid.push(
      <circle cx={x} cy={y} r="5" fill="#a00"/>
    );

    var hex = calcPoints(x, y, 100);
    grid.push(<path d={
      "M "+hex[0].x+" "+hex[0].y+
      " L "+hex[1].x+" "+hex[1].y+
      " L "+hex[2].x+" "+hex[2].y+
      " L "+hex[3].x+" "+hex[3].y+
      " L "+hex[4].x+" "+hex[4].y+
      " L "+hex[5].x+" "+hex[5].y+
      " L "+hex[0].x+" "+hex[0].y+
      " L "+x+" "+y+
      " L "+hex[2].x+" "+hex[2].y+
      " M "+x+" "+y+
      " L "+hex[4].x+" "+hex[4].y
    } fill="none" stroke="#000" strokeWidth={1}/>)

    // hex points
    grid.push(
      ...hex.map((p:Point)=><circle cx={p.x} cy={p.y} r={2} fill={"#000"}/>)
    )

    return grid;
  }

  const hex = () => {
    var grid: React.ReactNode[] = [];
    var hex = calcPoints(200, 200, 100);
    grid.push(<path d={
      "M "+hex[0].x+" "+hex[0].y+
      " L "+hex[1].x+" "+hex[1].y+
      " L "+hex[2].x+" "+hex[2].y+
      " L "+hex[3].x+" "+hex[3].y+
      " L "+hex[4].x+" "+hex[4].y+
      " L "+hex[5].x+" "+hex[5].y+
      " L "+hex[0].x+" "+hex[0].y+
      " L "+200+" "+200+
      " L "+hex[2].x+" "+hex[2].y+
      " M "+200+" "+200+
      " L "+hex[4].x+" "+hex[4].y
    } fill="none" stroke="#000" strokeWidth={1}/>);

    grid.push(
      <circle cx={200} cy={200} r="5" fill="#a00"/>
    );
    return grid;
  }

  return (
    <SVG>
      {grid()}

    </SVG>
  )
}

function App_old() {
  const honeys = () => {
    let ret: React.ReactNode[] = [];
    let i = 0;
    for(let y=0; y<window.innerHeight; y=y+26) {
      let x = i%2===0? 0 : 45
      for(x; x<window.innerWidth; x=x+90) {
        if(Math.random() >= 0.4){
          ret.push(
            <Honey
              x={x}
              y={y}
              stroke={"#000"}
              strokeWidth={1}
              fill={"#fff"}
              filter={"url(#shadow)"}
            />
          )
        }
      }
      i++;
    }

    return (
      <>
        {ret}
      </>
    )
  }

  return (
    <SVG>
      <defs>
        <PCircles
          width={10}
          height={10}
          cx={5}
          cy={5}
          r={5}
          color={"#000"}
        />
        <PDiamonds
          width={50}
          height={50}
          x={25}
          y={25}
          f={50}
          g={50}
          color={"#000"}
        />
        <PLines
          id={"hv"}
          width={20}
          height={20}
          vertical={true}
          horizontal={true}
          color={"#000"}
          strokeWidth={5}
        />
        <PLines
          id={"v"}
          width={10}
          height={10}
          vertical={true}
          horizontal={false}
          color={"#000"}
        />
        <PLines
          id={"h"}
          width={10}
          height={10}
          vertical={false}
          horizontal={true}
          color={"#000"}
        />
        <pattern id="dots" width="12" height="21" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="6" r="5" fill="#000"/>
          <circle cx="0" cy="6" r="5" fill="#000"/>
          <circle cx="5" cy="16" r="5" fill="#000"/>
        </pattern>
        <pattern id="dark_honey" width="90" height="52" patternUnits="userSpaceOnUse">
          <polygon
            points="45,52 60,26 45,0 15,0 0,26 15,52"
            stroke={"#fff"}
            strokeWidth={25}
            fill={"#000"}
          />
        </pattern>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)"/>
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"/>
        </pattern>
        <pattern id="circle-flower" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="#444" />
          <circle cx="25" cy="0" r="25" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="0" cy="25" r="25" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="25" cy="50" r="25" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="50" cy="25" r="25" stroke="#fff" strokeWidth={1} fill={NONE} />
        </pattern>
        <pattern id="ellipse-flower" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="#444" stroke="#a00" strokeWidth={1}/>
          <ellipse cx="40" cy="20" rx="5" ry="20" stroke="#fff" strokeWidth={1} fill={NONE} />
          <ellipse cx="40" cy="60" rx="5"ry="20" stroke="#fff" strokeWidth={1} fill={NONE} />
          <ellipse cx="20" cy="40" rx="20"ry="5" stroke="#fff" strokeWidth={1} fill={NONE} />
          <ellipse cx="60" cy="40" rx="20"ry="5" stroke="#fff" strokeWidth={1} fill={NONE} />
        </pattern>
        <pattern id="hexagon-flower" width="30" height="52" patternUnits="userSpaceOnUse">
          <rect width="60" height="52" fill="#444"/>
          <circle cx="30" cy="52" r="30" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="45" cy="26" r="30" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="30" cy="0" r="30" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="0" cy="0" r="30" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="-15" cy="26" r="30" stroke="#fff" strokeWidth={1} fill={NONE} />
          <circle cx="0" cy="52" r="30" stroke="#fff" strokeWidth={1} fill={NONE} />
        </pattern>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="20" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

    </SVG>
  );
}

export default App;
