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

        p.strokeWeight(2)
        p.stroke("#1810F9")
        const step = 20
        const width = p.windowWidth-canvasOffset
        const height = p.windowWidth-canvasOffset
        for (var x=0; x < width; x += step) {
          for (var y=0; y<height; y+=step) {
            DrawLines(x,y, step, step)
          }
        }

        p.strokeWeight(50)
        p.noFill()
        
        // const shadowOffset = 10
        // p.stroke(150)
        // p.ellipse(width/2+shadowOffset, height/2+shadowOffset, 300)
        p.drawingContext.shadowOffsetX = 15;
        p.drawingContext.shadowOffsetY = 5;
        p.drawingContext.shadowBlur = 20;
        p.drawingContext.shadowColor = p.color("#8D8D8D");
        p.stroke(255)
        p.ellipse(width/2, height/2, 300)
        
        
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