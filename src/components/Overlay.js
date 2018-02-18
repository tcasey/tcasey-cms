import React, { Component } from "react";
import Link from "gatsby-link";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import Twitter from "./Twitter";

export default class Overlay extends Component {
  constructor(props) {
    super(props);
    this.go = this.go.bind(this);
    this.state = {
      iconColor: "#edac01"
    };
  }
  go() {
    this.props.toggleMenu();
  }
  render() {
    const toggle = this.props.menu ? "active" : "disable";
    const { iconColor } = this.state;
    return (
      <div className={`overlay-menu-${toggle}`}>
        <div className="overlay-group">
          <ul className="columns">
            <li className="column routes">
              <Link onClick={this.go} to="/projects">
                projects
              </Link>
            </li>
            <li className="column routes">
              <Link onClick={this.go} to="/bio">
                bio
              </Link>
            </li>
            <li className="column routes">
              <Link onClick={this.go} to="/blog">
                blog
              </Link>
            </li>
            <li className="column routes">
              <a onClick={this.go} href="mailto:hello@tcasey.me">
                contact
              </a>
            </li>
          </ul>
          <div className="social-icons-mobile">
            <a className="social" href="https://twitter.com/_tcasey_">
              <Twitter color={iconColor} width={32} height={32} />
            </a>
            <a className="social" href="https://github.com/tcasey">
              <Github color={iconColor} width={32} height={32} />
            </a>
            <a className="social" href="https://www.linkedin.com/in/trevorkc">
              <LinkedIn color={iconColor} width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
