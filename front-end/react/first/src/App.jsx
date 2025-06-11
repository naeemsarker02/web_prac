import React from "react";
import Home from "./pages/Home";
import About from './pages/About';
import Product from './pages/Product'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/About",
        element: <About/>,
    },
    
    {
        path: "/Product",
        element: <Product/>,
    },
    
]);



const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App;