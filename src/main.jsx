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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element:<PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/add",
        element:<PrivateRoute><AddPage></AddPage></PrivateRoute>,
      },
      {
        path: "/my",
        element:<PrivateRoute><MyCard></MyCard></PrivateRoute>,
      },
      {
        path: "/art",
        element: <AllArt></AllArt>,
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
