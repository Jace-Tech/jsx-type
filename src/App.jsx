import { Box } from "@chakra-ui/react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import AOS from "aos";
import 'animate.css';
import "aos/dist/aos.css";
import routes from "./routes";


const App = () => {
  const {pathname} = useLocation()
  
  // INITIALIZE AOS
  useEffect(() => {
    AOS.init({ duration: 1000, anchorPlacement: "bottom-center" });
    return () => AOS.refresh();
  }, [])

  // SCROLL TOP
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <Box minH={"full"} w={"full"} overflowX={"hidden"}>
        <Routes>
          { routes.map((route) => <Route {...route} key={route.name} />) }
        </Routes>
    </Box>
  )
}

export default App