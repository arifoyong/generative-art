import { useEffect, useRef } from "react";

const ImperfectCircle = () => {
  const myRef = useRef(null)

  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current)
      p.background(255)
      p.noLoop()
    }
  
    // p.draw = () => {
     
    // }

  }
 
  useEffect(() => {
    const p5 = require("p5")
    new p5(Sketch)
  }, [])
 
 return <div ref={myRef}></div>
}
 
export default ImperfectCircle;