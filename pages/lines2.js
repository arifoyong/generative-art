// Reference: https://www.youtube.com/watch?v=Qf4dIN99e2w&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD
import { useEffect, useRef } from "react";




const PerlinShape = () => {
  const myRef = useRef(null)

  const canvasStructure = (p) => {
    p.strokeWeight(1)
    p.stroke(0,0,0, 10)

    for (let i=0; i<10000; i++) {
      let x = p.random(1, p.windowWidth)
      let y = p.random(1, p.windowHeight)
      let l = p.random(50,200)
      p.line(x,y, x+l, y)

      x = p.random(1, p.windowWidth)
      y = p.random(1, p.windowHeight)
      l = p.random(50,200)
      p.line(x,y, x, y+l)
    }
  }

  const grid = (p, sq, offset, pallete) => {
    let x = 0-offset

    while (x < p.windowWidth + offset) {
      let w = p.random(5, sq)
      let y = 0-offset
      p.noStroke()
      while (y < p.windowHeight + offset) {
        let l = p.random(20,100)

        let colorIdx = Math.floor(Math.random()* pallete.length)
        p.fill(pallete[colorIdx])

        p.push()
          p.translate(x,y)
          p.rect(0,0,w, l, p.random(0,10), p.random(0,10), p.random(0,10), p.random(0,10))
        p.pop()

        y += l+Math.floor(Math.random()*5)
      }
     
      x += w+1
    }
  }

  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current)
      p.background(0)
      p.noLoop()

      const palletes = [
        [p.color("#FF6978"),p.color("#FFB3B9"),p.color("#FFFCF9"),p.color("#D8F5F1"),p.color('#B1EDE8'),p.color('#8F98A1'),p.color('#6D435A'), p.color('#352D39')], 
        [p.color("#A2D2FF"),p.color("#FEF9EF"),p.color("#FF865E"),p.color("#FEE440")],
        [p.color("#064635"),p.color("#519259"),p.color("#F0BB62"),p.color("#F4EEA9")],
        [p.color("#161853"),p.color("#292C6D"),p.color("#FAEDF0"),p.color("#EC255A")]
    ]


      const sq = 30
      let offset=1000
      let angle = p.random(-Math.PI/5, Math.PI/5)
      let palleteIdx = Math.floor(Math.random()* palletes.length)
      p.rotate(angle)
      grid(p, sq, offset, palletes[palleteIdx])
      
      p.rotate(-angle)
      canvasStructure(p)
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
 
export default PerlinShape;