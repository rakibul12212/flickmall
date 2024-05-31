

import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import HomeIndex from "../Pages/Home/HomeIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <HomeIndex/> },
      { path: "about", element: <About/> },
      { path: "contact", element: <Contact/> },
    ],
  },
  
]);

export default router;