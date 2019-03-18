import React, { Component } from 'react'

import Details from '../Details'
import { Theme } from '../ThemeSwitcher/ThemeSwitcher.interface'
import ProfileImage from '../ProfileImage'
import daynight from 'daynight'
import { IAppState } from './App.interface'

class App extends Component<{}, IAppState> {
  state = {
    theme: daynight() ? Theme.light : Theme.dark,
  }

  changeTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === Theme.light ? Theme.dark : Theme.light,
    }))
  }

  render() {
    const {
      state: { theme },
    } = this

    const themed = Theme[theme]

    return (
      <div className={`App ${themed}`}>
        <div className="App-container">
          <header className="App-header">
            {/* <div className="App-theme-switcher">
              <ThemeSwitcher theme={theme} onChange={this.changeTheme} />
            </div> */}
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
}

export default App
