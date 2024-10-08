import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const [items, setItems] = useState(null);
  const [searched, setSearched] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null)
  const [open, setOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [order, setOrder] = useState([]);

  const filteredItemsBySearched = (items, searched) => {
    return items?.filter(item => item.title.toLowerCase().includes(searched.toLowerCase()) ||
    item.category.toLowerCase().includes(searched.toLowerCase()))
  }

  useEffect(() => {
    if (searched) setFilteredItems(filteredItemsBySearched(items, searched))
  }, [items, searched]);

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
        items,
        setItems,
        searched,
        setSearched,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
