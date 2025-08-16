import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Service from "./pages/services/Service";


const router = createBrowserRouter([
  {
    path: "/", element: React.createElement(App), children: [
        { index: true, element: React.createElement(Home) },
        { path: "home", element: React.createElement(Home) },
        { path: "about", element: React.createElement(About) },
        { path: "services", element: React.createElement(Service) },
        { path: "contact", element: React.createElement(Contact) },
        ],
    },
  {
    path: "/register", // <-- NOT a child of App
    element: React.createElement(Register),
  },
]);

export default router;