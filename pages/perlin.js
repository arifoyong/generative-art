// Reference: https://www.youtube.com/watch?v=Qf4dIN99e2w&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD
import { useEffect, useRef } from "react";

const Perlin3 = () => {
  const myRef = useRef(null)

  const arrow = (p, x, y, size, angle) => {
    p.push()
      p.fill(0)
      p.translate(x,y)
      p.rotate(angle)
      p.ellipse(0,0,size/4)
      p.line(0,0,0,size)
    p.pop()
  }

  const Sketch = p => {
    let field = [] 
    let fieldId = []
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current)
      p.background(255)
      // p.noLoop()

      let dAngle = Math.PI / 4
      let i=0
      let j=0
      let sq = 20
      let mult= 1/2000
      
      let curlPos1 = p.random(0, p.windowWidth)

      for (let x=0; x<p.windowWidth; x+=sq) {
        i = x/sq
        field[i] = []
        fieldId[i] = []
        for (let y=0; y<p.windowHeight; y+=sq) {      
          j = y/sq
          let dAngle3 = j / (p.windowHeight/sq) * Math.PI 
          dAngle = p.map(p.noise(x*mult, y*mult), 0,1, 0, Math.PI*3)
          let dAngle2 = p.atan2(curlPos1-y, curlPos1-x)  - Math.PI/2

          field[i][j] =  dAngle + dAngle3
          fieldId[i][j] = -1
          // arrow(p, sq*i, sq*j, sq/2 , field[i][j])
        }
      }


      p.noFill()
      

      for (let i=0; i<2000; i++) {
        p.strokeWeight(p.random(5,20))
        p.strokeCap(p.SQUARE)
        p.strokeJoin(p.BEVEL)
        p.stroke(p.random(250), p.random(250), p.random(250))

        let x=p.random(10, p.windowWidth-10)
        let y=p.random(10, p.windowHeight+10)

        let numSteps = p.random(100,500)
        let step_length = 1

        p.beginShape()
        Loop1:
        for (let j=0; j<numSteps; j++) {
          p.curveVertex(x,y)

          let col_index = p.int(x/sq)
          let row_index = p.int(y/sq)

          if (col_index < 0 || row_index <0 || col_index >= field.length) {
            break Loop1;
          }

          if (fieldId[col_index][row_index] !== i && fieldId[col_index][row_index] > -1) {
            break Loop1
          } else {
            fieldId[col_index][row_index] = i
          }

          let grid_angle=field[col_index][row_index] + Math.PI/2
         
          let x_step=step_length * p.cos(grid_angle)
          let y_step=step_length * p.sin(grid_angle)

          x=x+x_step
          y=y+y_step
        }
        p.endShape()
      }

    }
  
    p.draw = () => {
         
    }
  

  }
 
  useEffect(() => {
    const p5 = require("p5")
    new p5(Sketch)
  }, [])
 
 return <div ref={myRef}></div>
}
 
export default Perlin3;