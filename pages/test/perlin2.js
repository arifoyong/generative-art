// Reference: https://www.youtube.com/watch?v=Qf4dIN99e2w&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD
import { useEffect, useRef } from "react";


const Perlin2 = () => {
  const myRef = useRef(null)
  let points = []
  let mult = 0.005

  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current)
      p.background(30)
      // p.noLoop()

      const density = 10
      const space = p.windowWidth / density
      for (let i=0; i<p.windowWidth; i+=space) {
        for (let j=0; j<p.windowHeight; j+=space) {
          let vec = p.createVector(i,j)
          points.push(vec)
        }
      }
    }
  
    p.draw = () => {
      p.noStroke()
      p.strokeWeight(0.1)
      p.fill(255)

      let pt = 24
      for (let i=pt; i<pt+20; i++) {
        let angle = p.map(p.noise(points[i].x*mult, points[i].y*mult), 0,1, 0, p.windowWidth)
        
        points[i].add(p.createVector(p.cos(angle), p.sin(angle)))
        p.ellipse(points[i].x, points[i].y, 5)
      }
     
    }
  

  }
 
  useEffect(() => {
    const p5 = require("p5")
    new p5(Sketch)
  }, [])
 
 return <div ref={myRef}></div>
}
 
export default Perlin2;