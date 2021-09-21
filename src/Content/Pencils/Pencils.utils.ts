const pencilKey = 'yanke.ru:pencils'
const fallbackMessage = 'a collection of pencils'

export const restorePencilMessage = () =>
  localStorage.getItem(pencilKey) || fallbackMessage
export const storePencilMessage = (message: string) =>
  localStorage.setItem(pencilKey, message)
