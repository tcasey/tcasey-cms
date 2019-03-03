import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../pages/index'

const HomePagePreview = ({ entry, getAsset }) => {
  const introEntryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const introBlurbs = introEntryBlurbs ? introEntryBlurbs.toJS() : []

  const mainEntryBlurbs = entry.getIn(['data', 'main', 'blurbs'])
  const mainBlurbs = mainEntryBlurbs ? mainEntryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      hero={{
        title: entry.getIn(['data', 'hero', 'title']),
        text: entry.getIn(['data', 'hero', 'text']),
        button: entry.getIn(['data', 'hero', 'button']),
        image: getAsset(entry.getIn(['data', 'hero', 'image'])),
      }}
      intro={{
        introBlurbs,
        heading: entry.getIn(['data', 'intro', 'heading']),
      }}
      main={{ mainBlurbs }}
      testimonials={testimonials}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
