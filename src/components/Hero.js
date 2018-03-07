import React, { Component } from "react";
import Link from "gatsby-link";
import BackgroundCircle from "./BackgroundCircle";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circle_x: -58,
      circle_y: -37
    };
  }
  onMouseMove1(e) {
    this.setState({ circle_x: e.screenX, circle_y: e.screenY });
  }

  render() {
    const { circle_x, circle_y } = this.state;
    const { scrollY } = this.props;
    return (
      <div className="home-header" onMouseMove={this.onMouseMove1.bind(this)}>
        <div className="hero-container">
          <div className="hero-circles">
            <div className="circle circle-1">
              <div
                className="cursor-animate cursor-animate-1"
                style={{
                  transform: `translate(${circle_x / 30}px, ${circle_y / 30}px)`
                }}
              />
            </div>
            <div className="circle circle-2">
              <div
                className="cursor-animate cursor-animate-2"
                style={{
                  transform: `translate(${circle_x / 60}px, ${circle_y / 60}px)`
                }}
              />
            </div>
          </div>
          <div className="container">
            <div className="hero">
              <h1 className="is-size-3-mobile">
                <span>Software Developer.</span>
                <span>Perpetual Student.</span>
                <span>Craftsman.</span>
              </h1>
            </div>
          </div>
        </div>
        <BackgroundCircle scrollY={scrollY} />
      </div>
    );
  }
}
