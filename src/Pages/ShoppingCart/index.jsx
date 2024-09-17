import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ProductShoppingCart from "../../Components/ProductShoppingCart";

function ShoppingCart() {
  const context = useContext(ShoppingCartContext);

  const totalQuantity = context.cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  return (
    <div className="pt-16 flex flex-col bg-gray-200">
      <div className="flex justify-items-center justify-evenly py-16 bg-gray-200 h-max ">
        <div className="w-7/12 flex flex-col justify-evenly">
          {
            context.cartProducts.map(product => (
              <ProductShoppingCart
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          }
        </div>
        <div className="bg-white w-1/4 h-56 p-4 rounded">
          <h2 className="text-lg font-bold">Resumen de compra</h2>
          <div className="flex justify-between">
            <span>Total</span>
            <span>${totalQuantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span>Gratis</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold">$Precio Final</span>
          </div>
          <input type="text" placeholder="Ingresar código de cupón" className="mt-2" />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
            Continuar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
