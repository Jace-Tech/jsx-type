import LandingPage from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default [
  { path: '/', element: <LandingPage />, name: "Drive"},
  { path: '/register', element: <Register />, name: "Register"},
  { path: '/login', element: <Login />, name: "Login"},
]