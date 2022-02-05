import React, { Component } from 'react';

class Sketch extends Component {
  constructor(){
  super()
  this.renderRef = React.createRef()
  this.state = {
    x: 100,
    y: 100
    }
  }

  componentDidMount(){
    const p5 = require("p5")
    const canvasOffset = 20

    this.sketch = new p5( p => {
      p.setup = ()  => {
          p.createCanvas(p.windowWidth-canvasOffset, p.windowHeight-canvasOffset)
          .parent(this.renderRef.current);
          p.noLoop()
      }
      p.windowResized = () => {
          p.resizeCanvas(p.windowWidth-canvasOffset, p.windowHeight-canvasOffset )
          p.clear()
          p.draw()
      }

      p.draw = () => {
        const DrawLines = (x,y, width, height) => {
          const leftToRight = Math.random() >= 0.5
          if (leftToRight) {
            p.line(x, y, x+width, y+height);
          } else {
            p.line(x, y+height, x+width, y)
          }
        }

        const step = 20
        const width = p.windowWidth-canvasOffset
        const height = p.windowWidth-canvasOffset
        for (var x=0; x < width; x += step) {
          for (var y=0; y<height; y+=step) {
            DrawLines(x,y, step, step)
          }
        }
        
      }
    });
  }

render() {

  return (
    <div className="App">
      <div ref={this.renderRef}></div>
    </div>
  );
}
}

export default Sketch;