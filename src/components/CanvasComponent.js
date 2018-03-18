import React, { Component } from 'react';

const circleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y, width, height);
}
export default class CanvasComponent extends Component {
  componentDidMount() {
      this.updateCanvas();
  }
  componentDidUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
    circleArray.map((item) => {
      const ctx = this.refs.canvas.getContext('2d');
      const X = Math.floor(Math.random() * (820- 120) * 1.5);
      const Y = Math.floor(Math.random() * (293- 120) * 1.5);
      const radius = Math.floor(Math.random() * 30) + 10;
      const color = [
        "rgba(245, 100, 0,.9)",
        "rgba(237, 172, 1,.9)",
        "rgba(0, 122, 255,.9)",
        "rgba(62, 199, 224,.9)",
        "rgba(240, 240, 240,.9)",
        "rgba(255, 130, 0,.9)",
        "rgba(64, 107, 178,.9)",
        "rgba(135, 169, 178,.9)"
      ];

      ctx.beginPath();
      ctx.arc(X, Y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = color[Math.floor(Math.random() * color.length)];
      ctx.fill();
    });
  }
  render() {
       return (
           <canvas ref="canvas" width={820} height={293} style={ this.props.style } />
       );
  }
}