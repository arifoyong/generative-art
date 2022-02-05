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

    this.sketch = new p5( p => {
      p.setup = ()  => {
          p.createCanvas(p.windowWidth-50, p.windowHeight-50)
          .parent(this.renderRef.current);
          // p.background('white');
          // p.strokeWeight(5);

      }
      p.windowResized = () => {
          p.resizeCanvas(p.windowWidth-50, p.windowHeight-50 )
      }

      p.draw = () => {
        p.background(100)
        p.triangle(10,100,100,500,500,600)
        
        // rectangle
        p.rect(400,10,100,100)
    
        // rectangle with rounded corner
        p.rect(520,10,150,100, 10)
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