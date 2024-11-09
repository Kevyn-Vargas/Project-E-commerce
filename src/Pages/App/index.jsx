import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";

import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import Account from "../Account";
import Orders from "../Orders";
import OrderLast from "../Order-last";
import ShoppingCart from "../ShoppingCart";
import NotFound from "../NotFound";
import Contact from "../Contact";
import NavBar from "../../Components/NavBar";
import Payment from "../Payment";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    { path: "/account", element: <Account /> },
    { path: "/orders", element: <Orders /> },
    { path: "/orders/last", element: <OrderLast /> },
    { path: "/orders/:id", element: <OrderLast /> },
    { path: "/shopping-cart", element: <ShoppingCart /> },
    { path: "/contact", element: <Contact /> },
    { path: "/payment", element: <Payment/>},
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
        <NavBar></NavBar>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;