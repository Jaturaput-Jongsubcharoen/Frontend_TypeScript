import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./pages/register/Register";


const router = createBrowserRouter([
    { path: "/", element: React.createElement(App)},
    
    { path: "/register", element: React.createElement(Register)},
]);

export default router;