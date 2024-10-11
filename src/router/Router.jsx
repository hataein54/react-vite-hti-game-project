import { Children } from "react";
import Footer from "../components/layout/Footer";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path:"/",
    element : <App/>,
    loader:()=>"로또",
    Children:[
      {
        path: "/",
        loader: () => "로또",
        element: <Footer/>,
      },
    ],
  },
];

const router = createBrowserRouter(routes)

export{router,routes}