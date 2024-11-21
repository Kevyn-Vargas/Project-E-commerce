import { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, EyeIcon } from '@heroicons/react/24/solid';

function CardNormal({ data }) {
  const context = useContext(ShoppingCartContext);
  const [categoria, setCategoria] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga de 2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (data) {
      setCategoria(data?.category);
      setImagen(data?.image);
      setTitle(data?.title);
      setPrice(data?.price);
    }
  }, [data]);

  const handleProductoClick = () => {
    let producto = data;
    context.setProductoSeleccionado(producto);
  };

  const addProductsToCart = (productData) => {
    const productExists = context.cartProducts.some(object => object.id === productData.id);
    context.setShowNotification(true);

    if (productExists) {
      const productCart = context.cartProducts.find(object => object.id === productData.id);
      productCart.quantity += 1;
    } else {
      productData.quantity = 1;
      context.setCartProducts([...context.cartProducts, productData]);
    }
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-gradient-to-tr from-black to-gray-300 relative w-60 h-64 -sm:mx-auto -sm:w-44 -sm:h-48 -md:w-52 -md:h-56 -md:mx-auto rounded-lg">
      <figure className="relative w-full h-full">
        <img className="w-full h-full object-cover rounded-lg mix-blend-multiply" src={imagen} alt="..." />
        <p className="flex flex-col items-end absolute top-5 right-5">
          <span className="text-white text-xs">Price</span>
          <span className="text-white text-lg font-medium">
            ${(price * context.currencyValueSelected).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
          </span>
        </p>
        <span className="w-3/4 text-base font-medium text-white absolute bottom-20 left-5">{title}</span>
        <span className="absolute bottom-12 left-3 pl-0 text-gray-400 text-xs m-2 px-3 py-0.5">
          {categoria ? categoria.charAt(0).toUpperCase() + categoria.slice(1) : "Waiting..."}
        </span>
        <div onClick={() => addProductsToCart(data)} className="bg-gray-400 w-6 h-6 absolute bottom-6 left-5 flex justify-center items-center rounded-lg cursor-pointer">
          <PlusIcon className="size-3 border-[1px] border-black rounded-full"></PlusIcon>
        </div>
        <div onClick={() => {
          handleProductoClick(data);
          context.setOpen(true);
        }} className="bg-gray-400 w-6 h-6 absolute bottom-6 left-14 flex justify-center items-center rounded-lg cursor-pointer">
          <EyeIcon className="size-3 border-[1px] border-black rounded-full bg-black text-gray-400"></EyeIcon>
        </div>
      </figure>
    </div>
  );
}

// SkeletonLoader component for loading animation
function SkeletonLoader() {
  return (
    <div className="bg-gray-300 relative w-60 h-64 rounded-lg animate-pulse">
      <div className="w-full h-40 bg-gray-400 rounded-t-lg"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default CardNormal;
