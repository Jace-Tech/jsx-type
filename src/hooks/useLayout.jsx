import { useEffect, useState } from "react"

const useLayout = () => {
  const [isMedium, setIsMedium] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 900) {
        setIsMedium(true)
        return
      }
      setIsMedium(false)
    }

    window.addEventListener("resize", checkScreenSize)
    window.addEventListener("load", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      window.removeEventListener("load", checkScreenSize)
    }
  }, [])
  return { isMedium }
}

export default useLayout