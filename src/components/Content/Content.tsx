import React from 'react'
import Details from './Details'
import Links from './Links'
import Pencils from './Pencils'

const Content = () => (
  <article>
    <dl>
      <Details label="Handle" value={<Links />} />
      <Details
        label="About"
        value={
          <>
            Lead Frontend Engineer @<a href="https://www.simplinic.de/">simplinic</a>.
          </>
        }
      />
      <Details label="Email" value={<a href="mailto:roman@yanke.ru">roman@yanke.ru</a>} />
      <Details label="Location" value="Saint Petersburg, Russia 🇷🇺" />
      <Pencils />
    </dl>
  </article>
)

export default Content
