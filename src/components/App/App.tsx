import React from 'react'
import { useDarkMode } from './App.hooks'
import Details from '../Details'
import Links from '../Links'
import Pencils from '../Pencils'
import ProfileImage from '../ProfileImage'
import ThemeSwitcher from '../ThemeSwitcher'

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div className="App">
      <section className="App-container">
        <header>
          <ProfileImage />
          <div className="App-theme">
            <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </header>

        <main>
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
            <Details label="Location" value="Saint Petersburg, Russia" />
            <Pencils />
          </dl>
        </main>
      </section>
    </div>
  )
}

export default App
