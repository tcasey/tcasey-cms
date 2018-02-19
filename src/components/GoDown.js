import React, { Component } from "react";

class GoDown extends Component {
  render() {
    const { width, height, color } = this.props;
    return (
      <div>
        <svg width={width} height={height} viewBox="0 0 25 25">
          <g id="Down_Chevron_Canvas" transform="translate(-940 -5125)">
            <g id="Down_Chevron_Circle">
              <use
                xlinkHref="#down_chevron_circle"
                transform="translate(940 5125)"
                fill={color}
              />
            </g>
          </g>
          <defs>
            <path
              id="down_chevron_circle"
              fillRule="evenodd"
              d="M 25 12.5C 25 19.3901 19.39 25 12.5 25C 5.60999 25 0 19.3901 0 12.5C 0 5.60986 5.60999 0 12.5 0C 19.39 0 25 5.60986 25 12.5ZM 17.65 9.6499L 18.36 10.3599L 12.86 15.8599C 12.7599 15.96 12.6299 16.0098 12.5099 16.0098C 12.39 16.0098 12.25 15.96 12.16 15.8599L 6.65997 10.3599L 7.37 9.6499L 12.52 14.7998L 17.65 9.6499ZM 12.5 1C 18.84 1 24 6.16016 24 12.5C 24 18.8398 18.84 24 12.5 24C 6.15997 24 1 18.8398 1 12.5C 1 6.16016 6.15997 1 12.5 1Z"
            />
          </defs>
        </svg>
      </div>
    );
  }
}

export default GoDown;

GoDown.defaultProps = {
  width: 32,
  height: 32,
  color: "#edac01"
};
