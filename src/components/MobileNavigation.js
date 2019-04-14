import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { css } from 'emotion'
import { Link } from 'gatsby'
import { get } from 'lodash'
import { Color, Text } from '../constants'
import Icon from './Icons'

const routes = 5

const styles = {
  container: {
    position: 'fixed',
    display: 'grid',
    gridTemplateColumns: `repeat(${routes}, 1fr)`,
    width: '100vw',
    minHeight: 60,
    bottom: 0,
    borderTop: '1px solid rgb(231, 232, 243)',
    zIndex: 10,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  mobileNavItem: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
    paddingBottom: 'env(safe-area-inset-bottom)',
    height: '100%',
    fontSize: Text.LABEL,
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  default: {
    backgroundColor: Color.WHITE_BLUE,
  },
  active: {
    color: Color.ERROR,
    fontWeight: 'bold',
  },
}

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'mobile-link-active' : 'mobile-link-default' }
}

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: 'mobile-link-active' }
    : { className: 'mobile-link-default' }
}

const MobileNavItem = props => <Link {...props} />

export default class MobileNavigation extends Component {
  render() {
    const frontmatter = get(this.props, 'data.edges[0].node.frontmatter')

    return (
      <MediaQuery query="(max-width: 800px)">
        <nav role="navigation" className={css(styles.container)}>
          {frontmatter &&
            frontmatter.menuItems &&
            frontmatter.menuItems.map(
              ({ label, linkURL, linkIcon = 'home', linkType }) => {
                const activeProps =
                  label === 'blog' ? isPartiallyActive : isActive
                if (linkType === 'internal') {
                  return (
                    <MobileNavItem
                      key={`${linkIcon}-${linkURL}`}
                      to={linkURL}
                      getProps={activeProps}
                    >
                      <Icon type={linkIcon} size={24} />
                      {label}
                    </MobileNavItem>
                  )
                } else {
                  return (
                    <a
                      key={`${linkIcon}-${linkURL}`}
                      href={linkURL}
                      className={
                        this.props.isCurrent
                          ? 'mobile-link-active'
                          : 'mobile-link-default'
                      }
                    >
                      <Icon type={linkIcon} size={24} fill={Color.PRIMARY} />
                      {label}
                    </a>
                  )
                }
              }
            )}
        </nav>
      </MediaQuery>
    )
  }
}
