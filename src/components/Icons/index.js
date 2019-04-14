import React, { Component } from 'react'
import icons from './icons.json'

export class Icon extends Component {
  render() {
    const { size, fill, type } = this.props

    const viewBox =
      type === 'quill' ||
      type === 'login' ||
      type === 'userProfile' ||
      type === 'manBeard' ||
      type === 'home' ||
      type === 'environmentalist' ||
      type === 'potfolio'
        ? '0 0 20 30'
        : '0 0 1050 1200'
    return (
      <svg width={size} height={size} viewBox={viewBox} fill="none">
        <linearGradient
          id="gradient-horizontal"
          gradientTransform="rotate(115)"
        >
          <stop offset="0%" stopColor="var(--color-stop-1)" />
          <stop offset="50%" stopColor="var(--color-stop-2)" />
          <stop offset="100%" stopColor="var(--color-stop-3)" />
        </linearGradient>
        <linearGradient
          id="gradient-vertical"
          x2="0"
          y2="1"
          gradientTransform="rotate(115)"
        >
          <stop offset="0%" stopColor="var(--color-stop-1)" />
          <stop offset="50%" stopColor="var(--color-stop-2)" />
          <stop offset="100%" stopColor="var(--color-stop-3)" />
        </linearGradient>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={icons[type]}
          fill={fill}
        />
      </svg>
    )
  }
}

export default Icon
