import {
     createBrowserRouter,
} from "react-router-dom";
import Main from "../Laout/Main";
import ErrorPage from "../shared/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>
               },
               {
                    path: "/login",
                    element: <Login></Login>
               },
               {
                    path: "/resister",
                    element: <Register></Register>
               },
          ]
     },
     // {
     //      path: "dashboard",
     //      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
     //      children: [
     //           {
     //                path:"selected",
     //                element:<PrivateRoute><Selected></Selected></PrivateRoute>,
     //           },
     //           {
     //                path:"payment",
     //                element:<PrivateRoute><Payment></Payment></PrivateRoute>,
     //           },
     //           {
     //                path:"enrolledClass",
     //                element:<PrivateRoute><EnrolledClass></EnrolledClass></PrivateRoute>
     //           },
     //           {
     //                path:"addClass",
     //                element: <InstructorsRoute><AddClass></AddClass></InstructorsRoute>
     //           },
     //           {
     //                path:"myClasses",
     //                element: <InstructorsRoute><MyClasses></MyClasses></InstructorsRoute>
     //           },
     //           {
     //                path:"manageClasses",
     //                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
     //           },
     //           {
     //                path:"manageUsers",
     //                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
     //           },
     //      ]
     // }
]);