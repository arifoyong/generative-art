import React, { Component } from 'react';

class Sketch extends Component {
  constructor(){
  super()
  this.renderRef = React.createRef()
  }

  componentDidMount(){
    const p5 = require("p5")
    const canvasOffset = 30
    const sqSize = 30
    const rotateMultiplier = 1
    const randomDisplacement = 0.5

    this.sketch = new p5( p => {
      let W = p.windowWidth-canvasOffset
      let H = p.windowHeight-canvasOffset
      const pallete = [
        p.color("#001b2e"),
        p.color("#294c60"),
        p.color("#adb6c4"),
        p.color("#ffefd3"),
        p.color("#ffc49b"),
        p.color("#a5cc6b")
      ]

      p.setup = ()  => {
        p.createCanvas(W, H).parent(this.renderRef.current);
        p.angleMode(p.RADIANS)
        p.noLoop()
      }
      
      p.windowResized = () => {
        W = p.windowWidth-canvasOffset
        H = p.windowHeight-canvasOffset
        p.resizeCanvas(W, H)
      }

      p.draw = () => {
        for (let i=0; i<W-sqSize; i+=sqSize) {
          for (let j=0; j<H-sqSize; j+=sqSize) {
            let plusOrMinus = Math.random() > 0.5 ? -1 : 1
            let rotateAmt = j / sqSize * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier
            
            plusOrMinus = Math.random() > 0.5 ? -1 : 1
            let translateAmt = j/sqSize * plusOrMinus * Math.random()  * randomDisplacement
            let colorIdx = Math.floor(Math.random()* pallete.length)
            p.push()
              p.fill(pallete[colorIdx])
              p.translate(i + translateAmt,j+translateAmt)
              p.rotate(rotateAmt)
              p.rect(0,0, sqSize, sqSize)
 
            p.pop()
          }
        }
        
      }
    });
  }

render() {
  return (
    <div className="flex">
      <div className="mx-auto"
        ref={this.renderRef}>
      </div>
    </div>
  );
}
}

export default Sketch;