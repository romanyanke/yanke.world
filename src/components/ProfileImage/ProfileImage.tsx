import React from 'react'

import profilePicture from './assets/romanyanke.jpg'
import profilePicture2 from './assets/romanyanke@2x.jpg'
import profilePicture3 from './assets/romanyanke@3x.jpg'

const ProfileImage = () => (
  <div className="ProfileImage">
    <h1 className="ProfileImage-caption">Roman Yanke</h1>
    <img
      width="300"
      height="300"
      alt="Roman Yanke"
      src={profilePicture}
      srcSet={`${profilePicture2} 2x, ${profilePicture3} 3x`}
    />
  </div>
)

export default ProfileImage
