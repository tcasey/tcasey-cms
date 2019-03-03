import React, { Component } from 'react'

class GoBack extends Component {
  render() {
    const { width, height } = this.props
    return (
      <div className="link">
        <a
          onClick={() => {
            window.history.back()
          }}
        >
          <svg width={width} height={height} viewBox="0 0 14 23">
            <g id="Left_Chevron_Canvas" transform="translate(-156 -5126)">
              <g id="Left_Chevron">
                <use
                  xlinkHref="#left_chevron_fill"
                  transform="translate(156.497 5126.44)"
                  fill="#edac01"
                />
              </g>
            </g>
            <defs>
              <path
                id="left_chevron_fill"
                d="M 10.4425 22.12L 0.4425 12.12C -0.1475 11.53 -0.1475 10.58 0.4425 10L 10.4425 0L 12.5625 2.12L 3.6225 11.06L 12.5625 20L 10.4425 22.12Z"
              />
            </defs>
          </svg>
        </a>
      </div>
    )
  }
}

export default GoBack

GoBack.defaultProps = {
  width: 24,
  height: 32,
}
