import React from 'react'

import profilePicture from './assets/romanyanke.jpg'
import profilePicture2 from './assets/romanyanke@2x.jpg'
import profilePicture3 from './assets/romanyanke@3x.jpg'

const ProfileImage = () =>
  (
    <div className="ProfileImage">
      <img
        width="300"
        height="300"
        alt="Roman Yanke"
        src={profilePicture}
        srcSet={`${profilePicture2} 2x, ${profilePicture3} 3x`}
      />
      <strong className="ProfileImage-caption">Roman Yanke</strong>
    </div>
  )

export default ProfileImage
