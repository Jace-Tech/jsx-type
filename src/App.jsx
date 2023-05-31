import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Landing } from "./pages"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, anchorPlacement: "bottom-center" })
    return () => Aos.refresh()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
