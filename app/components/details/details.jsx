import React from 'react'
import './details.styl'

class Details extends React.Component {
  render () {
    return (
      <div id='details'>
        <div className='details-label'>{config.translations.completion}</div>
        <button className='details-button'>{config.translations.send}</button>
        <h1>{config.translations.request_to_detail}</h1>
      </div>
    )
  }
}
export default Details
