import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import mail from "../img/mail.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import "./all.sass";

const Footer = () => (
  <footer>
    <div className="container-fluid footer-rectangle elements-in once active">
      <div className="footer-background" />
      <div className="row contact columns">
        <div className="column is-half-tablet is-two-thirds-desktop">
          <div className="info footer-rectangle-left">
            <p>Let’s work together</p>
            <h1>
              <Link to="mailto:hello@tcasey.me">hello@tcasey.me</Link>
            </h1>
          </div>
        </div>
        <div className="column is-half-tablet is-half-desktop">
          <div className="info footer-rectangle-left">
            <p>Let’s talk code</p>
            <h1>
              <Link to="https://twitter.com/_tcasey_" target="_blank">
                @_tcasey_
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div className="container footer-bottom">
      <div className="row columns is-desktop">
        <div className="column is-one-fifth-widescreen is-half-fullhd footer-logo-wrapper">
          <Link className="navbar-brand bottom-logo" to="/">
            <img
              src={logo}
              alt="tcasey"
              style={{ width: "88px", maxHeight: "3rem" }}
            />
          </Link>
        </div>
        <div className="column is-hidden-tablet-only is-hidden-desktop-only is-two-fifth-widescreen is-one-quarter-fullhd footer-nav-wrapper">
          <ul className="footer-navbar-nav">
            <li>
              <Link to="/projects/">projects</Link>
            </li>
            <li>
              <Link to="/bio/">bio</Link>
            </li>
            <li>
              <Link to="/blog/">blog</Link>
            </li>
          </ul>
        </div>
        <div className="is-hidden-widescreen is-hidden-mobile social column name-title">
          <h1>Trevor Casey</h1>
        </div>
        <div className="column is-two-fifth-widescreen is-one-quarter-fullhd copyright">
          <div className="footer-social-icons">
            <a className="social" href="https://twitter.com/_tcasey_">
              <img src={twitter} alt="twitter" style={{ width: "32px" }} />
            </a>
            <a className="social" href="https://github.com/tcasey">
              <img src={github} alt="github" style={{ width: "32px" }} />
            </a>
            <a className="social" href="https://www.linkedin.com/in/trevorkc">
              <img src={linkedin} alt="linkedIn" style={{ width: "32px" }} />
            </a>
          </div>
          <span className="copyright navbar-text navbar-right">
            Copyright © 2018
          </span>
        </div>
      </div>
    </div>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Trevor Casey | JavaScript Developer" />
    <NavBar />
    <main style={{ width: "100vw" }}>{children()}</main>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
