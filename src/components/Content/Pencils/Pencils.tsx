import { useEffect, useState } from 'react'
import { restorePencilMessage, storePencilMessage } from './Pencils.utils'
import Details from '../Details'

const Pencils = () => {
  const [description, setDescription] = useState(restorePencilMessage())

  useEffect(() => storePencilMessage(description), [description])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://romanyanke.github.io/pencilbox-static/description/')
      const { description } = await response.json()
      setDescription(description)
    }
    fetchData()
  }, [])

  return (
    <Details
      label="Hobby"
      value={
        <>
          I have <a href="https://pencil.yanke.ru/">{description}</a>.
        </>
      }
    />
  )
}

export default Pencils
