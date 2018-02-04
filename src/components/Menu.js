import React, { Component } from "react";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
  }
  toggleState() {
    this.props.toggleMenu();
  }
  render() {
    const { menu } = this.props;

    if (menu) {
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
