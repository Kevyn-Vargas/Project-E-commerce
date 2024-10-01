import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [order, setOrder] = useState([]);

  const increaseQuantity = (id) => {
    const updatedCart = cartProducts.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCartProducts(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartProducts.map(product => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCartProducts(updatedCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        open,
        setOpen,
        productoSeleccionado,
        setProductoSeleccionado,
        cartProducts,
        setCartProducts,
        increaseQuantity,
        decreaseQuantity,
        showNotification,
        setShowNotification,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
