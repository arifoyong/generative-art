import React, { useEffect, useRef } from "react";
 
const ImperfectCircle = () => {
  const myRef = useRef(null)

  const Sketch = p5 => {
    let xVals = []
    let yVals = []

    const crookedCircle = (radius, steps, cX, cY) => {
      for (let i=0; i<steps; i++) {
        let rad = radius + p5.random(-5,5)
        xVals[i] = cX + rad * Math.cos(2*Math.PI * i / steps)
        yVals[i] = cY + rad * Math.sin(2*Math.PI * i / steps)
      }
      
      p5.beginShape()
      for (let i=0; i<xVals.length+3; i++) {
        let pos = i % xVals.length        
        p5.curveVertex(xVals[pos], yVals[pos])
      }
      p5.endShape()
    }

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(myRef.current);
      p5.background(255);
      p5.noLoop();
      p5.strokeWeight(2)
      crookedCircle(200, 10, p5.windowWidth/2, p5.windowHeight/2)
      p5.strokeWeight(1)

      crookedCircle(200, 10, p5.windowWidth/2, p5.windowHeight/2)
    };
  
    // p5.draw = () => {
      
    // };
  };
 
  useEffect(() => {
  const p5 = require("p5")
  new p5(Sketch);
  }, []);
 
 return <div ref={myRef}></div>
};
 
export default ImperfectCircle;