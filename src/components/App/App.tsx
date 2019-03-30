import React, { useState, useEffect } from 'react'

import Details from '../Details'
import { Theme } from '../ThemeSwitcher/ThemeSwitcher.interface'
import ProfileImage from '../ProfileImage'
import ThemeSwitcher from '../ThemeSwitcher'
import daynight from 'daynight'

const App: React.SFC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light)
  const themed = Theme[theme]
  useEffect(() => {
    const day = daynight()
    setTheme(!day.error && day.light ? Theme.light : Theme.dark)
  }, [])

  return (
    <div className={`App ${themed}`}>
      <div className="App-container">
        <header className="App-header">
          <div className="App-theme-switcher">
            <ThemeSwitcher theme={theme} onChange={setTheme} />
          </div>
          <ProfileImage />
        </header>

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
      </div>
    </div>
  )
}

export default App
