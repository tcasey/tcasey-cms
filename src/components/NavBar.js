import React, { Component } from "react";
import Link from "gatsby-link";
import Menu from "./Menu";
import logo from "../img/logo.svg";

export default class NavBar extends Component {
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
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img
                src={logo}
                alt="tcasey"
                style={{ width: "88px", maxHeight: "3rem" }}
              />
            </figure>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/bio">
              bio
            </Link>
            <Link className="navbar-item" to="/projects">
              projects
            </Link>
            <Link className="navbar-item" to="/blog">
              blog
            </Link>
          </div>
        </div>
        <Menu />
      </nav>
    );
  }
}
