import profilePicture from './assets/romanyanke.jpg'
import profilePicture2 from './assets/romanyanke@2x.jpg'
import profilePicture3 from './assets/romanyanke@3x.jpg'
import Sky from './Sky'
import styles from './Header.module.css'
import { useDarkMode } from './Sky/Sky.hooks'

const Header = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const name = 'Roman Yanke'

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
