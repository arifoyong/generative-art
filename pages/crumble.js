import React, { useEffect, useRef } from "react";
import { Scribble } from "./test/scr";
 
const ImperfectCircle = () => {
  const myRef = useRef(null)

  const Sketch = p => {
    let s
    let W = p.windowWidth
    let H = p.windowHeight
    const sqSize = 30
    const offset = 2
    const rotateMultiplier = 1
    const randomDisplacement = 0.5
    const pallete = [
      p.color("#001b2e"),
      p.color("#294c60"),
      p.color("#adb6c4"),
      p.color("#ffefd3"),
      p.color("#ffc49b"),
      p.color("#a5cc6b")
    ]

    p.setup = () => {
      s = new Scribble(p);
      p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current);
      p.angleMode(p.RADIANS)
      // p.background(155)
      p.noLoop()
  
    };
  
    p.draw = () => {
      let midX = Math.floor(W/sqSize) * sqSize / 2
      let midY = Math.floor(H/sqSize) * sqSize / 2
     
      for (let i=0; i<=W-sqSize; i+=sqSize) {
        let distX = (Math.abs(i-midX) - midX)/sqSize

        for (let j=0; j<=H-sqSize; j+=sqSize) {
          let distY = (Math.abs(j-midY) - midX)/sqSize

          let plusOrMinus = Math.random() > 0.5 ? -1 : 1
          let rotateAmt = (distX*distY/4) * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier
          // let rotateAmt = j / sqSize * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier
          
          plusOrMinus = Math.random() > 0.5 ? -1 : 1
          let translateY = distY *  Math.random() *plusOrMinus* randomDisplacement
          let translateX = distX *  Math.random() *plusOrMinus* randomDisplacement
          // let translateAmt = j/sqSize * plusOrMinus * Math.random()  * randomDisplacement
          let colorIdx = Math.floor(Math.random()* pallete.length)
          p.push()
            p.fill(pallete[colorIdx])
            p.translate(i+translateX, j+translateY)
            p.rotate(rotateAmt)         
            p.rect(0+offset,0+offset, sqSize-offset, sqSize-offset)
          p.pop()
        }
      }
    };
  };
 
  useEffect(() => {
    const p5 = require("p5")
    new p5(Sketch);
  }, []);
 
 return <div ref={myRef}></div>
};
 
export default ImperfectCircle;