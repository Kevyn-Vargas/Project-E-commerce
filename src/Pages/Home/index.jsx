import { useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout";
import CardNormal from "../../Components/CardNormal";
import ProductDetails from "../../Components/ProductDetails";
import {ShoppingCartContext} from "../../Context";
import MnsjProductAdd from "../../Components/MnsjProductAdd";

const url = "https://fakestoreapi.com/products";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const context = useContext(ShoppingCartContext);

const handleNotificationClose = () => {
  context.setShowNotification(false);
};
  return (
    <Layout>
      <input className="block w-2/4 rounded-md border border-slate-300 shadow-sm placeholder-slate-400
      focus:outline-none focus:border-black pl-1 my-12 py-2" type="text" placeholder="Search..."></input>
      {/* Mostrar la notificación si está activa */}
      {context.showNotification && (
        <MnsjProductAdd
          message="Se ha agregado un producto al carrito"
          onClose={handleNotificationClose}
        />
      )}
      <div className="grid gap-7 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <CardNormal key={item.id} data={item} />
        ))}
      </div>
      <CardNormal />
      <ProductDetails />
    </Layout>
  );
}

export default Home;