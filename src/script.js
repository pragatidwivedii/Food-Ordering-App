import React from "react";
import { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCard";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import {createBrowserRouter , RouterProvider ,Outlet} from "react-router";
import Restaurantmenu from "./components/Restaurantmenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import OnlineStatus from "./components/OnlineStatus";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
// import Grocery from "./components/Grocery";

// const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const onlineStatus = useOnlineStatus();
    return (onlineStatus) ? ( 
    <Provider store={appStore}>
    <div>
        <Header/>
        <Outlet />
    </div>
    </Provider>) : (<OnlineStatus />)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            // {
            //     path: "/grocery",
            //     element: <Suspense fallback = {<div className="Body"><h1>Loading...</h1></div>}><Grocery /></Suspense>
            // },
            {
                path: "/restaurants/:resId",
                element: <Restaurantmenu />
            }
        ],
        errorElement: <Error /> 
    },   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
