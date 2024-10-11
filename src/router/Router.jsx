import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LottoBall from "../components/lotto/LottoBall";

const routes = [
  {
    path:"/",
    element : <App/>,
    loader:()=>"로또",
    children:[
      {
        path: "/",
        loader: () => "로또",
        element: <LottoBall/>,
      },
    ],
  },
];

const router = createBrowserRouter(routes)

export{router,routes}