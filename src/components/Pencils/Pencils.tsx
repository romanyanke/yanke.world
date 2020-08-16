import React, { useEffect, useState } from 'react'
import Details from '../Details'
import { restorePencilMessage, storePencilMessage } from './Pencils.utils'

const Pencils = () => {
  const [description, setDescription] = useState(restorePencilMessage())
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://romanyanke.github.io/pencilbox-static/description/')
      const { description } = await response.json()
      setDescription(description)
    }
    fetchData()
  }, [])

  useEffect(() => storePencilMessage(description), [description])

  return (
    <Details
      label="Hobby"
      value={
        <span>
          I have <a href="https://pencil.yanke.ru/">{description}</a>.
        </span>
      }
    />
  )
}

export default Pencils
