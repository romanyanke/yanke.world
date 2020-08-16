import React, { useState, useEffect } from 'react'
import styles from './Sky.module.css'
import { SkyProps, Celestial } from './Sky.interface'
import { isSnapping } from '../../App/App.utils'

const Sky = ({ night: darkMode }: SkyProps) => {
  const [mode, setMode] = useState('')

  useEffect(() => {
    if (!isSnapping) {
      setMode(darkMode ? styles.night : styles.day)
    }
  }, [darkMode])

  return (
    <div aria-hidden className={`${styles.root} ${mode}`}>
      <span className={styles.Sun}>{Celestial.Sun}</span>
      <span className={styles.Moon}>{Celestial.Moon}</span>
    </div>
  )
}

export default Sky
