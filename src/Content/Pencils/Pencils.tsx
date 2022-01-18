import { useEffect, useState } from 'react'
import { restorePencilMessage, storePencilMessage } from './Pencils.utils'

const Pencils = () => {
  const [description, setDescription] = useState(restorePencilMessage())

  useEffect(() => storePencilMessage(description), [description])

  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        'https://romanyanke.github.io/pencilbox/description/',
      )
      const { description } = await response.json()

      setDescription(description)
    })()
  }, [])

  return (
    <>
      I have <a href="https://pencil.yanke.ru/">{description}</a>
    </>
  )
}

export default Pencils
