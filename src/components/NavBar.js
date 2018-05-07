import React, { Component } from "react";
import Link from "gatsby-link";
import { withRouter } from "react-router-dom";
import Media from "react-media";
import Menu from "./Menu";
import logo from "../img/logo.svg";
import Logo from "./Logo";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.props.toggleMenu();
  }
  render() {
    const {
      location: { pathname },
      menu
    } = this.props;
    let navColor = "is-light";
    let navPosition = "relative";
    let linkColor = "#075dff";
    let linkClass = "children";
    let logoDimensions = 48;
    let logoStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    };

    linkClass = "main";
    linkColor = "#fff";
    if (
      pathname === "/blog" ||
      pathname === "/bio" ||
      pathname === "/projects"
    ) {
      navColor = "is-primary";
      // logoDimensions = 64;
    }
    if (pathname === "/" || pathname.includes("/projects/")) {
      navPosition = "absolute";
    }

    return (
      <nav
        className={`navbar ${navColor} columns`}
        style={{ position: navPosition }}
      >
        <Media query="(min-width: 1000px)">
          <div className={`navbar ${navColor} columns full-menu`}>
            <div className="nav-left column">
              <span className="name" style={{ color: linkColor }}>
                Trevor Casey
              </span>
            </div>
            <div className="nav-center column">
              <Link to="/" className="logo-wrapper" style={logoStyle}>
                <Logo
                  width={logoDimensions}
                  height={logoDimensions}
                  color={linkColor}
                />
              </Link>
            </div>
            <div className={`nav-right column ${linkClass}-wrapper`}>
              <ul className="nav-links">
                <li className={linkClass}>
                  <Link className="" to="/bio">
                    bio
                  </Link>
                </li>
                <li className={linkClass}>
                  <Link className="" to="/projects">
                    projects
                  </Link>
                </li>
                <li className={linkClass}>
                  <Link className="" to="/blog">
                    blog
                  </Link>
                </li>
                <li className={linkClass}>
                  <a className="" href="mailto:hello@tcasey.me">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Media>
        <Media query="(max-width: 1000px)">
          <div className="navbar columns is-fixed-top mobile-menu">
            <div className="nav-left column">
              <Link to="/" className="logo-wrapper">
                <Logo
                  width={logoDimensions}
                  height={logoDimensions}
                  color={"#075dff"}
                />
              </Link>
            </div>
            <div className="nav-center column" />
            <div className="nav-right column">
              <Menu toggleMenu={this.toggleMenu} menu={menu} />
            </div>
          </div>
        </Media>
      </nav>
    );
  }
}

export default withRouter(NavBar);
