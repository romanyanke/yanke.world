import React, { useState, useEffect } from 'react'

import Details from '../Details'
import { Theme } from '../ThemeSwitcher/ThemeSwitcher.interface'
import ProfileImage from '../ProfileImage'
import ThemeSwitcher from '../ThemeSwitcher'
import daynight from 'daynight'
import Pencils from '../Pencils'

const App: React.SFC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light)
  const themed = Theme[theme]
  useEffect(() => {
    const day = daynight()
    setTheme(!day.error && day.light ? Theme.light : Theme.dark)
  }, [])

  return (
    <div className={`App ${themed}`}>
      <main className="App-container">
        <section className="App-header">
          <div aria-hidden="true" className="App-theme-switcher">
            <ThemeSwitcher theme={theme} onChange={setTheme} />
          </div>
          <ProfileImage />
        </section>

        <dl>
          <Details label="Username" value="romanyanke" />
          <Details
            label="About"
            value={
              <>
                Building applications with TypeScript and React @
                <a href="https://www.simplinic.de/">simplinic</a>.
              </>
            }
          />
          <Details label="Email" value={<a href="mailto:roman@yanke.ru">roman@yanke.ru</a>} />
          <Details label="Location" value="Saint Petersburg, Russia" />
          <Pencils />
        </dl>
      </main>
    </div>
  )
}

export default App
