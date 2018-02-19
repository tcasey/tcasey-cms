import React, { Component } from "react";

export default class DemoiPhone extends Component {
  render() {
    const { color, demoImage } = this.props;
    const image = `url(${demoImage}) `;

    return (
      <div className="center">
        <div className="iphone-container">
          <div className="svg-iphone">
            <svg
              id="Layer_1"
              x="0px"
              y="0px"
              width="300px"
              height="600px"
              viewBox="0 0 316 640"
              enableBackground="new 0 0 316 640"
              xmlSpace="preserve"
            >
              <g>
                <defs>
                  <path
                    id="SVGID_1_"
                    d="M0,29.997C0,13.43,13.427,0,29.996,0h256.009C302.57,0,316,13.441,316,29.997v580.006
						C316,626.57,302.573,640,286.004,640H29.996C13.429,640,0,626.559,0,610.003V29.997z"
                  />
                </defs>
                <clipPath id="SVGID_2_">
                  <use xlinkHref="#SVGID_1_" overflow="visible" />
                </clipPath>
                <path
                  clipPath="url(#SVGID_2_)"
                  fill="none"
                  className="outline-one"
                  stroke={color}
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M0,29.997
					C0,13.43,13.427,0,29.996,0h256.009C302.57,0,316,13.441,316,29.997v580.006C316,626.57,302.573,640,286.004,640H29.996
					C13.429,640,0,626.559,0,610.003V29.997z"
                />
              </g>
              <g>
                <defs>
                  <path
                    id="SVGID_3_"
                    d="M13,74.01c0-2.767,2.229-5.01,5.003-5.01h279.994c2.763,0,5.003,2.229,5.003,5.01v489.981
						c0,2.767-2.229,5.009-5.003,5.009H18.003C15.24,569,13,566.771,13,563.991V74.01z"
                  />
                </defs>
                <clipPath id="SVGID_4_">
                  <use xlinkHref="#SVGID_3_" overflow="visible" />
                </clipPath>
                <path
                  clipPath="url(#SVGID_4_)"
                  fill="none"
                  className="outline-two"
                  stroke={color}
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M13,74.009
					C13,71.243,15.229,69,18.003,69h279.994c2.763,0,5.003,2.229,5.003,5.009V563.99c0,2.767-2.229,5.01-5.003,5.01H18.003
					C15.24,569,13,566.771,13,563.99V74.009z"
                />
              </g>
              <line
                fill="none"
                className="outline-line"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="138"
                y1="37.684"
                x2="178"
                y2="37.684"
              />
            </svg>
          </div>
          <div className="iphone">
            <div className="iphone-body">
              <div
                className="iphone-image"
                style={{
                  backgroundImage: image,
                  backgroundSize: "300px",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
            <div className="extra" />
          </div>
        </div>
      </div>
    );
  }
}

DemoiPhone.defaultProps = {
  color: "#4a4a4a"
};
