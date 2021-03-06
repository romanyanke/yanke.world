import { useEffect, useRef } from 'react'
import profilePicture from './assets/romanyanke.jpg'
import profilePicture2 from './assets/romanyanke@2x.jpg'
import profilePicture3 from './assets/romanyanke@3x.jpg'
import Sky from './Sky'
import styles from './Header.module.css'
import { useDarkMode } from './Sky/Sky.hooks'

const Header = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const daysPassed = useRef(0)
  const name = 'Roman Yanke'

  useEffect(() => {
    if (darkMode) {
      daysPassed.current++
      if (daysPassed.current === 7) {
        alert('Whoa! A week passed!')
      }
      if (daysPassed.current === 30) {
        alert('Whoa! A month passed!')
      }
      if (daysPassed.current === 365) {
        alert('Whoa! A year passed! Please stop!')
      }
    }
  }, [darkMode])

  return (
    <header className={styles.root} onClick={toggleDarkMode}>
      <h1>{name}</h1>
      <img
        alt={name}
        src={profilePicture}
        srcSet={`${profilePicture2} 2x, ${profilePicture3} 3x`}
      />
      <Sky night={darkMode} />
    </header>
  )
}

export default Header
