import React, { useEffect, useRef } from "react";
// import * as p5 from "p5";
 
const StarWarsSketch = () => {
  const myRef = useRef(null)

 const Sketch = p5 => {
   let rad = 0
   p5.setup = () => {
     p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(myRef.current);
     p5.background(0);
    //  p5.noLoop();
   };
 
   p5.draw = () => {
   	p5.ellipse(p5.width/2,p5.height/2,rad,rad);
     rad++
   };
 };
 
 useEffect(() => {
  const p5 = require("p5")
  new p5(Sketch);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 return (
  	<div>
      <div ref={myRef}></div>
    </div>
 );
};
 
export default StarWarsSketch;