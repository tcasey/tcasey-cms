import React, { Component } from 'react'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
import Logo from '../components/Logo'
import { Link } from 'gatsby'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid footer-rectangle elements-in once active">
          <div className="footer-background" />
          <div className="row contact columns">
            <div className="column is-half-tablet is-half-desktop">
              <div className="info footer-rectangle-left">
                <p>Let’s work together</p>
                <h1>
                  <a href="mailto:hi@trevorcasey.dev">hi@trevorcasey.dev</a>
                </h1>
              </div>
            </div>
            <div className="column is-half-tablet is-half-desktop">
              <div className="info footer-rectangle-left">
                <p>Let’s talk code</p>
                <h1>
                  <a
                    href="https://twitter.com/_tcasey_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @_tcasey_
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="row columns is-desktop">
            <div className="column is-one-fifth-widescreen footer-logo-wrapper">
              <Link className="navbar-brand bottom-logo" to="/">
                <Logo width={50} height={50} color={'#075dff'} />
              </Link>
            </div>
            <div className="column is-hidden-tablet-only is-hidden-desktop-only is-two-fifth-widescreen footer-nav-wrapper">
              <ul className="footer-navbar-nav columns">
                <li className="column">
                  <Link to="/projects/">projects</Link>
                </li>
                <li className="column">
                  <Link to="/bio/">bio</Link>
                </li>
                <li className="column">
                  <Link to="/blog/">blog</Link>
                </li>
                <li className="column">
                  <a href="mailto:hi@trevorcasey.dev">contact</a>
                </li>
              </ul>
            </div>
            <div className="is-hidden-widescreen is-hidden-mobile social column name-title">
              <h1>Trevor Casey</h1>
            </div>
            <div className="column is-two-fifth-widescreen copyright">
              <div className="footer-social-icons">
                <a className="social" href="https://twitter.com/_tcasey_">
                  <img src={twitter} alt="twitter" style={{ width: '32px' }} />
                </a>
                <a className="social" href="https://github.com/tcasey">
                  <img src={github} alt="github" style={{ width: '32px' }} />
                </a>
                <a
                  className="social"
                  href="https://www.linkedin.com/in/trevorkc"
                >
                  <img
                    src={linkedin}
                    alt="linkedIn"
                    style={{ width: '32px' }}
                  />
                </a>
              </div>
              <span className="copyright navbar-text navbar-right">
                Copyright © 2018
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
