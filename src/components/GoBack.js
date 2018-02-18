import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class GoBack extends Component {
  render() {
    const { location: { pathname }, history: { goBack } } = this.props;
    return (
      <div className="link">
        <a>
          <svg width="14" height="23" viewBox="0 0 14 23" onClick={goBack}>
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
    );
  }
}

export default withRouter(GoBack);
