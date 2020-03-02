import React, { useEffect, useState } from 'react'
import { Description } from './Pencils.interface'
import Details from '../Details'

const Pencils = () => {
  const [info, setInfo] = useState('a collection of pencils')
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://romanyanke.github.io/pencilbox-static/description/')
      const info: Description = await response.json()
      setInfo(info.description)
    }
    fetchData()
  }, [])

  return (
    <Details
      label="Hobby"
      value={
        <span>
          I have <a href="https://pencil.yanke.ru/">{info}</a>.
        </span>
      }
    />
  )
}

export default Pencils
