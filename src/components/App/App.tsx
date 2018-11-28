import React, { Component } from 'react'

import Details from '../Details'
import ProfileImage from '../ProfileImage'

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
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
      </main>
    )
  }
}

export default App
