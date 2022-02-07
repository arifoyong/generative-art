// Reference: https://www.youtube.com/watch?v=Qf4dIN99e2w&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD
import { useEffect, useRef } from "react";

const ImperfectCircle = () => {
  const myRef = useRef(null)

  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current)
      p.background(255)
     
      p.noLoop()
    }
  
    p.draw = () => {
      p.noFill()

      p.beginShape()
      for (let i=0; i<p.windowWidth; i+=10) {
        const j = p.random(50,150) 
        p.vertex(i,j)
        p.ellipse(i,j, 2)
      }
      p.endShape()

      p.stroke(255,0,0)
      p.beginShape()
      for (let i=0; i<p.windowWidth; i+=10) {
        const j = p.noise(i/100) *100 + 50
        p.vertex(i,j)
        p.ellipse(i,j, 2)
      }
      p.endShape()
    }

  }
 
  useEffect(() => {
    const p5 = require("p5")
    new p5(Sketch)
  }, [])
 
 return <div ref={myRef}></div>
}
 
export default ImperfectCircle;