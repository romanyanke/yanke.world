import React from 'react'
import Details from '../Details'
import Pencils from '../Pencils'
import ProfileImage from '../ProfileImage'

const App = () => (
  <div className="App">
    <main className="App-container">
      <section className="App-header">
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

export default App
