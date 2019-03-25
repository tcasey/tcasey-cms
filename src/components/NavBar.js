import React, { Component } from 'react'
import { Link } from 'gatsby'
import { get } from 'lodash'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Menu from './Menu'
// import logo from '../img/logo.svg'
import Logo from './Logo'

export class NavbarTemplate extends Component {
  static defaultProps = {
    type: 'is-primary',
  }
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.props.toggleMenu()
  }
  render() {
    const { type } = this.props
    const navColor = type
    const linkColor = '#fff'
    const logoColor = '#075dff'
    const logoDimensions = 48
    const logoStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }

    return (
      <nav
        className={`navbar ${navColor} columns`}
        style={{ position: type === 'is-light' ? 'absolute' : 'relative' }}
      >
        <div
          css={css`
            display: none;
            @media (min-width: 1000px) {
              display: block;
            }
          `}
        >
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
            <div className={`nav-right column main-wrapper`}>
              <ul className="nav-links">
                <li className="main">
                  <Link className="" to="/bio">
                    bio
                  </Link>
                </li>
                <li className="main">
                  <Link className="" to="/projects">
                    projects
                  </Link>
                </li>
                <li className="main">
                  <Link className="" to="/blog">
                    blog
                  </Link>
                </li>
                <li className="main">
                  <a className="" href="mailto:hi@trevorcasey.dev">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: none;
            @media (max-width: 1000px) {
              display: block;
            }
          `}
        >
          <div className="navbar columns is-fixed-top mobile-menu">
            <div className="nav-left column">
              <Link to="/" className="logo-wrapper">
                <Logo
                  width={logoDimensions}
                  height={logoDimensions}
                  color={logoColor}
                />
              </Link>
            </div>
            <div className="nav-center column" />
            <div className="nav-right column">
              <Menu toggleMenu={this.toggleMenu} />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
const Navbar = ({ data, menu, toggleMenu, type }) => {
  // if (!props.data) {
  //   return null
  // }
  const navbarData = get(data, 'edges[0].node.frontmatter')

  return (
    <NavbarTemplate
      data={navbarData}
      menu={menu}
      toggleMenu={toggleMenu}
      type={type}
    />
  )
}

export { Navbar }
