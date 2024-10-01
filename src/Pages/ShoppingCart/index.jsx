import { useEffect, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import ProductShoppingCart from "../../Components/ProductShoppingCart";

function ShoppingCart() {
  const context = useContext(ShoppingCartContext);
  const [showNotification, setShowNotification] = useState(false);

  const totalQuantity = context.cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
  };

  useEffect(() => {
    // Cambiar el fondo del body a gris cuando se monta el componente
    document.body.style.backgroundColor = "#E5E7EB";

    // Restaurar el fondo del body cuando se desmonta el componente
    return () => {
      document.body.style.backgroundColor = ''; // Esto lo restaura al valor predeterminado
    };
  }, []);

  // Mostrar notificación por 10 segundos cuando el carrito está vacío
  useEffect(() => {
    if (totalQuantity === 0) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false); // Ocultar notificación después de 10 segundos
      }, 10000); // 10000ms = 10 segundos
      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [totalQuantity]);

  return (
    <div className="pt-16 flex flex-col">
      <div className="flex justify-items-center justify-evenly py-16">
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
                handleDelete={handleDelete}
              />
            ))
          }
        </div>
        <div className="bg-white w-1/4 h-56 p-4 rounded">
          <h2 className="text-lg font-bold">Resumen de compra</h2>
          <div className="flex justify-between">
            <span>Total</span>
            <span>${parseFloat(totalQuantity.toFixed(1))}</span>
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
          <input type="text" placeholder="Enter code of cupon" className="mt-2" />
          {totalQuantity > 0 ? (
            <>
              <Link to="/payment">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </>
          ) : (
            <div>
              {showNotification && (
                <div className={`notification transition-opacity duration-700 ease-in-out bg-red-500 text-white p-4 rounded mt-4 ${showNotification ? 'opacity-100' : 'opacity-0'}`}>
                  El carrito está vacío. Es necesario agregar un producto.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;