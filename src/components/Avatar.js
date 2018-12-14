import React from 'react'
import PropTypes from 'prop-types'

import '../styles/avatar.css'

const Avatar = ({src, alt}) => {
  return (
    <img className="avatar" src={src} alt={alt}/>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Avatar;
