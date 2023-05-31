import { useState } from "react"

const useBoolean = (state = false) => {
  const [isOpen, setIsOpen] = useState(state)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(prev => !prev)

  return { isOpen, toggle, open, close }
}

export default useBoolean