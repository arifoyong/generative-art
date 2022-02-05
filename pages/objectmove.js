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
    let x=50;
    let forward = 1;

    this.sketch = new p5( p => {
      p.setup = ()  => {
          p.createCanvas(p.windowWidth-50, p.windowHeight-50)
          .parent(this.renderRef.current);
          // p.frameRate(5)
      }

      p.windowResized = () => {
          p.resizeCanvas(p.windowWidth-50, p.windowHeight-50 )
      }

      p.draw = () => {
        p.background(100)

        
        
        if (x >= p.windowWidth-100) {
          forward = -1;
        } else if (x<=50) {
          forward = 1;
        }

        x = x+forward
        p.ellipse(x,200,100)
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