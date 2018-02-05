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
    const { location: { pathname }, menu } = this.props;
    let navColor = "is-light";
    let linkColor = "#0050A4";
    let linkClass = "children";
    let logoStyle;
    if (pathname === "/" || pathname === "/bio" || pathname === "/blog") {
      logoStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      };
      linkClass = "main";
      linkColor = "#fff";
      if (pathname === "/bio") {
        navColor = "is-info";
      } else if (pathname === "/blog") {
        navColor = "is-primary";
      }
    }

    return (
      <nav className={`navbar ${navColor} columns`}>
        <Media query="(min-width: 800px)">
          <div className={`navbar ${navColor} columns full-menu`}>
            {pathname === "/" || pathname === "/bio" || pathname === "/blog" ? (
              <div className="nav-left column">
                <span className="name" style={{ color: linkColor }}>
                  Trevor Casey
                </span>
              </div>
            ) : null}
            <div
              className={
                pathname === "/" || pathname === "/bio" || pathname === "/blog"
                  ? "nav-center column"
                  : "nav-center column is-two-thirds"
              }
            >
              <Link to="/" className="logo-wrapper" style={logoStyle}>
                <Logo width={35} height={35} color={linkColor} />
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
        <Media query="(max-width: 800px)">
          <div className="navbar columns is-fixed-top mobile-menu">
            <div className="nav-left column">
              <Link to="/" className="logo-wrapper">
                <Logo width={40} height={40} color={"#0050A4"} />
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
