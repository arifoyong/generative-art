import React, { Component } from 'react';

class Sketch extends Component {
  constructor() {
    super()
    this.renderRef = React.createRef()
  }

  componentDidMount(){
    const p5 = require("p5")
    const canvasOffset = 20
    
    this.sketch = new p5( p => {
      const pallete = [
        p.color("#502064"),
        p.color("#8267BE"),
        p.color("#3FA796"),
        p.color("#FFBD35"),
      ]

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
        const cvsW = p.windowWidth-canvasOffset
        const cvsH = p.windowHeight-canvasOffset
        const step = 20
        let lines = []
        for (var i=step; i<cvsH-step; i+=step) {
          let line = []
          for (var j=step; j<cvsW-step; j+=step) {
            var distanceToCenter = Math.abs(j - cvsW / 2);
            var variance = Math.max(cvsW / 2 - 200 - distanceToCenter, 0);
            var random = Math.random() * variance / 2 * -1;
            let point = {x:j, y:i+random}
            line.push(point)
          }
          lines.push(line)
        }
   
        for (var i=10; i<lines.length-1; i++) {
          p.beginShape()
          p.vertex(lines[i][0].x, lines[i][0].y)
          for (var j=0; j<lines[i].length-1; j++) {
            let colorIdx = Math.floor(Math.random()* pallete.length)
            p.stroke(pallete[colorIdx])
            p.strokeWeight(2)
            let xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
            let yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
            p.quadraticVertex(lines[i][j].x, lines[i][j].y, xc, yc);
          }
          p.endShape()
        }
      }
    });
  }

render() {

  return (
    <div className="flex">
      <div className="mx-auto" ref={this.renderRef}></div>
    </div>
  );
}
}

export default Sketch;