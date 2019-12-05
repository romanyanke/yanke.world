import React from 'react'
import Details from '../Details'
import Pencils from '../Pencils'
import ProfileImage from '../ProfileImage'
import ThemeSwitcher from '../ThemeSwitcher'
import { useDarkMode } from './App.hooks'

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
      </section>
    </div>
  )
}

export default App
