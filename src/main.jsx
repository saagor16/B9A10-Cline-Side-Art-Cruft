import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error/Error.jsx";
import AllArt from "./Art/AllArt.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import UpdateProfile from "./UpdateProfile/UpdateProfile.jsx";
import Profile from "./UserProfile/Profile.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddPage from "./AddPage/AddPage.jsx";
import MyCard from "./MyCard/MyCard.jsx";
import UpdatePage from "./UpdatePage/UpdatePage.jsx";
import Single from "./Single/Single.jsx";
import Contact from "./Contact/Contact.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://new-server-cruft-hodfnrwo8-saagor16s-projects.vercel.app/art'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateProfile",
        element:<UpdateProfile></UpdateProfile>,
      },
      {
        path: "/profile",
        element:<Profile></Profile>,
      },
      {
        path: "/add",
        element:<PrivateRoute><AddPage></AddPage></PrivateRoute>,
      },
      {
        path: "/art/:id",
        element:<UpdatePage></UpdatePage>,
        
      },
      {
        path: "/my",
        element:<PrivateRoute><MyCard></MyCard></PrivateRoute>,
        loader:()=>fetch('https://new-server-cruft-hodfnrwo8-saagor16s-projects.vercel.app/art'),
      },
      {
        path: "/art",
        element: <AllArt></AllArt>,
        loader:()=>fetch('https://new-server-cruft-hodfnrwo8-saagor16s-projects.vercel.app/art'),
      },
      {
        path: "/single/:id",
        element:<PrivateRoute><Single></Single></PrivateRoute>,
        
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
