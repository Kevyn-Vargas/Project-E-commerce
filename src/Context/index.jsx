import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        open,
        setOpen,
        productoSeleccionado,
        setProductoSeleccionado,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
