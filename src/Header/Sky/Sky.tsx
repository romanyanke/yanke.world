import { useState, useEffect } from 'react'
import classes from './Sky.module.css'
import { isSnapping } from '../../App/App.utils'

interface Props {
  night: boolean
}

enum Celestial {
  Sun = '🌞',
  Moon = '🌛',
}

const Sky = ({ night: darkMode }: Props) => {
  const [mode, setMode] = useState('')

  useEffect(() => {
    if (!isSnapping) {
      setMode(darkMode ? classes.night : classes.day)
    }
  }, [darkMode])

  return (
    <div aria-hidden className={`${classes.root} ${mode}`}>
      {Object.entries(Celestial).map(([name, presentation]) => {
        return (
          <span key={name} className={classes[name]}>
            {presentation}
          </span>
        )
      })}
    </div>
  )
}

export default Sky
