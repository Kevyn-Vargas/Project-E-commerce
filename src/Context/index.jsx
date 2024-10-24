import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const urlStore = "https://fakestoreapi.com/products";
  const urlMoney = "https://v6.exchangerate-api.com/v6/3bfdd717e7ed311dec36b494/latest/USD";

  useEffect(() => {
    fetch(urlStore)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch(urlMoney)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.conversion_rates)
      }) // Guardar todas las tasas de cambio);
  }, []);

  const [items, setItems] = useState(null);
  const [searched, setSearched] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null)
  const [open, setOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedOptionMoney, setSelectedOptionMoney] = useState('USD');
  const [currencyValueSelected, setCurrencyValueSelected] = useState(1);
  const [exchangesRates, setExchangeRates] = useState(null);

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

  /* Aqui empieza el Local Storage!!!

  This code revisa si en el local storage hay algun tipo de datos (ya sea en el carrito, user, u ordenes) y lo pone en el contexto actual como datos. */
  // Inicializamos el carrito y las órdenes directamente desde el localStorage

  //Carrito de Compras
  const [cartProducts, setCartProducts] = useState(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  });

  //Orders(Pedidos)
  const [order, setOrder] = useState(() => {
    const storedOrders = localStorage.getItem("order");
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  //Aqui posiblemente vaya el de User, es practicamente replicar los anteriores.


  /*  De aqui en adelante se guarda en Local Storage al actualizar los datos (with con useEffect) */

  //Carrito de compras
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);


  //Orders (Pedidos)
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  //Aqui posiblemente vaya el de User, es practicamente replicar los anteriores.



  //Hook que se encarga de hacer el cambio en los precios mediante la api y la opcion seleccionada
  useEffect(() => {
    switch (selectedOptionMoney) {
      case "USD":
        setCurrencyValueSelected(1)
        break;
      case "EUR":
        setCurrencyValueSelected(exchangesRates.EUR)
        break;
      case "COP":
        setCurrencyValueSelected(exchangesRates.COP)
        break;
      case "MXN":
        setCurrencyValueSelected(exchangesRates.MXN)
        break;
      default:
        setCurrencyValueSelected(1)
        console.log("Valor Default en Moneda");
        break;
    }
  }, [selectedOptionMoney])

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
        setSelectedOptionMoney,
        selectedOptionMoney,
        currencyValueSelected,
        setCurrencyValueSelected,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
