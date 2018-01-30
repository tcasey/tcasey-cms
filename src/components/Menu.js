import React, { Component } from "react";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleState = this.toggleState.bind(this);
  }
  toggleState() {
    this.setState({ active: !this.state.active });
  }
  render() {
    if (this.state.active) {
      return (
        <div
          className="is-active mobile-menu navbar-burger"
          onClick={this.toggleState}
        >
          <span />
          <span />
          <span />
        </div>
      );
    }

    return (
      <div className="mobile-menu navbar-burger" onClick={this.toggleState}>
        <span />
        <span />
        <span />
      </div>
    );
  }
}
