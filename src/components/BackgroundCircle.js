import React, { Component } from "react";
import Link from "gatsby-link";

export default class BackgroundCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderRadius: 50,
      transformVal: 43,
      transform: "matrix(1, 0, 0, 1, 0, 0)"
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.scrollY > 500) {
      this.setState({
        borderRadius: 50 - nextProps.scrollY * 0.03
      });
    } else {
      this.setState({
        borderRadius: 50 - nextProps.scrollY * 0.023
      });
    }
    const val =
      this.state.transformVal +
      nextProps.scrollY * 0.3 -
      this.state.transformVal;

    if (val < 428.86) {
      this.setState({
        transformVal: val,
        transform: `translate3d(0px, ${val}px, 0px)`
      });
    } else {
      this.setState({
        transformVal: val,
        transform: `transform: matrix(1, 0, 0, 1, 0,${val})`
      });
    }
  }
  render() {
    const { borderRadius, transform } = this.state;

    return (
      <div className="db-icon">
        <div className="circle-wrapper">
          <div
            className="circle"
            style={{
              borderRadius: `${borderRadius}%`,
              transform
              // transform: "matrix(1, 0, 0, 1, 0, 0)"
              // matrix(1, 0, 0, 1, 0, 428.85);
            }}
          />
        </div>
        <div className="container">
          <div className="db-icons elements-in">
            <div className="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}
