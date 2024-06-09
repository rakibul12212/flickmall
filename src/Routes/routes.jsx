

import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import HomeIndex from "../Pages/Home/HomeIndex";
import Signin from "../Pages/Register/Signin/Signin";
import Signup from '../Pages/Register/Signup/Signup'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <HomeIndex/> },
      { path: "about", element: <About/> },
      { path: "contact", element: <Contact/> },
      { path: "signin", element: <Signin/> },
      { path: "signup", element: <Signup/> },
    ],
  },
  
]);

export default router;