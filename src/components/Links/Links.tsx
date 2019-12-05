import React from 'react'
import { icons } from '../Links/icons'

const Links = () => {
  const list = [
    { url: 'https://github.com/romanyanke', icon: icons.github },
    { url: 'https://www.instagram.com/romanyanke', icon: icons.instagram },
    { url: 'https://www.linkedin.com/in/romanyanke', icon: icons.linkedin },
    { url: 'https://t.me/romanyanke', icon: icons.telegram },
    { url: 'https://twitter.com/romanyanke', icon: icons.twitter },
  ]

  return (
    <div className="Links">
      <div className="Links-handle">romanyanke</div>
      {list.map(({ url, icon: Icon }) => (
        <a href={url} key={url} className="Links-link">
          {<Icon />}
        </a>
      ))}
    </div>
  )
}

export default Links
