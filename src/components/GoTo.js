import React, { Component } from 'react'
import { Link } from 'gatsby'

class GoTo extends Component {
  render() {
    const { link, width, height } = this.props
    return (
      <div className="link">
        <Link to={`/${link}`}>
          <svg width={width} height={height} viewBox="0 0 14 23">
            <g id="Canvas" transform="translate(-206 -5126)">
              <g id="Right_Chevron">
                <use
                  xlinkHref="#right_chevron_fill"
                  transform="translate(206.94 5126.44)"
                  fill="#edac01"
                />
              </g>
            </g>
            <defs>
              <path
                id="right_chevron_fill"
                d="M 2.12 22.12L 0 20L 8.94 11.06L 0 2.12L 2.12 0L 12.12 10C 12.71 10.59 12.71 11.54 12.12 12.12L 2.12 22.12Z"
              />
            </defs>
          </svg>
        </Link>
      </div>
    )
  }
}

export default GoTo

GoTo.defaultProps = {
  width: 24,
  height: 32,
}
