import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Drivers, Riders } from "./pages"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Register from "./pages/riders/components/Register"
import Login from "./pages/riders/components/Login"

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, anchorPlacement: "bottom-center" })
    return () => Aos.refresh()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Riders />} />
        <Route path="/driver" element={<Drivers />} />
        {/* <Route path="/about" element={<Drivers />} /> */}
        <Route path="/register/rider" element={<Register />} />
        <Route path="/login/rider" element={<Login />} />
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
