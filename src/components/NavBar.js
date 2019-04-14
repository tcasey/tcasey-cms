import React, { Component } from 'react'
import { Link } from 'gatsby'
import { get } from 'lodash'
import MediaQuery from 'react-responsive'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Menu from './Menu'
import Logo from './Logo'

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'nav-link-active' : 'nav-link-default' }
}

const NavItem = props => (
  <li className="nav-links">
    <Link {...props} getProps={isActive} />
  </li>
)

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
    const menuItems = get(this.props, 'data.menuItems')

    return (
      <MediaQuery query="(min-width: 800px)">
        <nav
          className={`navbar ${navColor} columns`}
          style={{ position: type === 'is-light' ? 'absolute' : 'relative' }}
        >
          <div>
            <div className={`navbar ${navColor} columns full-menu`}>
              <div className="nav-left column">
                <Link to="/">
                  <span className="name" style={{ color: linkColor }}>
                    Trevor Casey
                  </span>
                </Link>
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
                  {menuItems &&
                    menuItems.map(
                      ({ label, linkURL, linkIcon = 'home', linkType }) => {
                        if (label === 'Home') {
                          return null
                        }
                        if (linkType === 'internal') {
                          return (
                            <NavItem
                              key={`${linkIcon}-${linkURL}`}
                              to={linkURL}
                            >
                              {label.toLocaleLowerCase()}
                            </NavItem>
                          )
                        } else {
                          return (
                            <li className="nav-links">
                              <a
                                key={`${linkIcon}-${linkURL}`}
                                href={linkURL}
                                className={
                                  this.props.isCurrent
                                    ? 'nav-link-active'
                                    : 'nav-link-default'
                                }
                              >
                                {label.toLocaleLowerCase()}
                              </a>
                            </li>
                          )
                        }
                      }
                    )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </MediaQuery>
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
