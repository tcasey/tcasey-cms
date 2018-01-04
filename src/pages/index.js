import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Script from 'react-load-script'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    return (
      <section className="section">
       <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
              Some of my Latest Work
            </h2>
            {/* <p>{description}</p> */}
          </div>
        </div>
      </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container" />
      </section>
    )
  }
}
