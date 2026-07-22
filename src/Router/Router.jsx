import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import RootLayouts from "../Layouts/RootLayouts";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import Home from "../Pages/Home/Home";
import Rider from "../Pages/Rider/Rider";
import PrivateRouter from "./PrivateRouter";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () =>
          fetch("/public/ServiceCenter.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: <PrivateRouter><Rider></Rider></PrivateRouter>
      },
      {
        path: "/send-parcel",
        element: <PrivateRouter><SendParcel></SendParcel></PrivateRouter>
      }
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
