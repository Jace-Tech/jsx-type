import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Faq from "../pages/Faq";
import LandingPage from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default [
  { path: '/', element: <LandingPage />, name: "Drive"},
  { path: '/register', element: <Register />, name: "Register"},
  { path: '/login', element: <Login />, name: "Login"},
  { path: '/about', element: <About />, name: "About"},
  { path: '/contact', element: <ContactUs />, name: "Contact"},
  { path: '/faq', element: <Faq />, name: "Faq"},
]