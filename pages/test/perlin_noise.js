// Reference: https://www.youtube.com/watch?v=Qf4dIN99e2w&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD
import { useEffect, useRef } from "react";

// const TwoD_Perlin = (p) => {
//   const inc = 0.1
//   const sq = 20
//   let noiseY = 0

//   for (let x=0; x<p.windowWidth; x+=sq) {
//     let noiseX = 0
//     for (let y=0; y<p.windowHeight; y+=sq) {
//       const color = p.noise(noiseX, noiseY) * 255
//       p.fill(color)
//       p.rect(x,y, sq)
//       noiseX += inc
//     }
//     noiseY += inc
//   }
// }

const TwoD_Perlin_Line = (p) => {
  const inc = 0.1
  const sq = 10
  let noiseY = 0
  // p.stroke(p.random(0,255), p.random(0,255), p.random(0,255))
  
  for (let x=0; x<p.windowWidth; x+=sq) {
    let noiseX = 0
    for (let y=0; y<p.windowHeight; y+=sq) {
      const angle = p.noise(noiseX, noiseY) * 2*Math.PI
      p.push()
        p.translate(x,y)
        
        const v = p.constructor.Vector.fromAngle(angle)
        p.line(0,0 ,v.x * sq, v.y * sq )
      p.pop()
      noiseX += inc
    }
    noiseY += inc
  }
}


const FlowField = () => {
  const myRef = useRef(null)

  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current)
      p.background(255)
      p.noLoop()
    }
  
    p.draw = () => TwoD_Perlin_Line(p)
  

  }
 
  useEffect(() => {
    const p5 = require("p5")
    new p5(Sketch)
  }, [])
 
 return <div ref={myRef}></div>
}
 
export default FlowField;