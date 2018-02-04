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
    let linkColor = "#001eff";
    let linkClass = "children";
    let logoStyle;
    if (pathname === "/") {
      logoStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      };
      linkClass = "main";
      linkColor = "#fff";
    }

    return (
      <nav className="navbar is-light columns">
        <Media query="(min-width: 800px)">
          <div className="navbar is-light columns full-menu">
            {pathname === "/" ? (
              <div className="nav-left column">
                <span className="name" style={{ color: linkColor }}>
                  Trevor Casey
                </span>
              </div>
            ) : null}
            <div className="nav-center column">
              <Link to="/" className="logo-wrapper" style={logoStyle}>
                <Logo width={35} height={35} color={linkColor} />
              </Link>
            </div>
            <div className="nav-right column">
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
                <Logo width={40} height={40} color={"#001eff"} />
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
