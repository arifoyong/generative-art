import React, { useEffect, useRef } from "react";
import { Scribble } from "./scr";
 
const ImperfectCircle = () => {
  const myRef = useRef(null)

  const Sketch = p5 => {
    let s; 

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(myRef.current);
      p5.noLoop()
      s = new Scribble(p5);
      p5.background(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));
      p5.strokeWeight(6);
      p5.stroke(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));
      s.scribbleFilling([p5.width / 4, p5.width / 4, p5.width / 4 * 3, p5.width / 4 * 3], 
                        [p5.height / 4, 3 * p5.height / 4, 3 * p5.height / 4, p5.height / 4], 
                        p5.random(5, 10), 120);
      p5.strokeWeight(5);
      s.scribbleFilling([200, 300, 100], 
        [100, 400, 400], 
        p5.random(5, 10), 120);
      p5.stroke(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));
      s.scribbleRect(p5.width / 2, p5.height / 2, p5.width / 2, p5.height / 2);
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