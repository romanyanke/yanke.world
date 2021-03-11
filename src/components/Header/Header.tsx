import { useEffect, useRef } from 'react'
import profilePicture from './assets/romanyanke.jpg'
import profilePicture2 from './assets/romanyanke@2x.jpg'
import profilePicture3 from './assets/romanyanke@3x.jpg'
import Sky from './Sky'
import styles from './Header.module.css'
import { useDarkMode } from './Sky/Sky.hooks'

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  const daysPassed = useRef(0)
  const name = 'Roman Yanke'
  const milestones = new Map()
    .set(7, 'Whoa! A week passed!')
    .set(30, 'Whoa! A month passed!')
    .set(365, 'Whoa! A year passed! Please stop!')

  useEffect(() => {
    const milestone = milestones.get(daysPassed.current++ / 2)

    if (milestone) {
      alert(milestone)
    }
  }, [milestones])

  return (
    <header className={styles.root} onClick={() => setDarkMode(!darkMode)}>
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
