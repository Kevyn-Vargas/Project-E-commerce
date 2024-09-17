import { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'
import { EyeIcon } from '@heroicons/react/24/solid'

function CardNormal({ data }) {
  const context = useContext(ShoppingCartContext);
  const [categoria, setCategoria] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(() => {
    if (data) {
      setCategoria(data?.category);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setImagen(data?.image);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setTitle(data?.title);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setPrice(data?.price);
    }
  }, [data]);

  const handleProductoClick = () => {
    let producto = data
    context.setProductoSeleccionado(producto)
    // Esto hace que cada vez que se de click en algun producto guarde la informacion del obejto en la variable "producto" del contexto, asi puedo mostrarlo en el modal.
  };

  const addProductsToCart = (productData) => {
    const productExists = context.cartProducts.some(object => object.id === productData.id); // dará true si el producto ya se encuentra en el carrito

		if (productExists) {
			// valida la existencia
			const productCart = context.cartProducts.find(object => object.id === productData.id); // busca el producto
			productCart.quantity += 1; // aumenta la cantidad en 1
		} else {
			productData.quantity = 1; // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
			context.setCartProducts([...context.cartProducts, productData]);
		}
		context.setCount(context.count + 1);
  }

  return (
    <div
      className="bg-gradient-to-tr from-black to-gray-300 relative w-60 h-64 rounded-lg"
    ><figure
      className="relative w-full h-full">
        <img
          className="w-full h-full object-cover rounden-lg mix-blend-multiply"
          //w-full h-full object-cover rounden-lg mix-blend-multiply
          src={imagen}
          alt="..."
        />
        <p className="flex flex-col items-end absolute top-5 right-5">
          <span className="text-white text-xs">Price</span>
          <span className="text-white text-lg font-medium">${price}</span>
        </p>

        <span className="w-3/4 text-base font-medium text-white absolute bottom-20 left-5">{title}</span>
        <span className="absolute bottom-12 left-3 pl-0 text-gray-400 text-xs m-2 px-3 py-0.5">
          {categoria
            ? data.category.charAt(0).toUpperCase() + data.category.slice(1)
            : "Waiting..."}
        </span>
        <div onClick={() => addProductsToCart(data)} className="bg-gray-400 w-6 h-6 absolute bottom-6 left-5 flex justify-center items-center rounded-lg cursor-pointer">
          <PlusIcon className="size-3 border-[1px] border-black rounded-full"></PlusIcon>
        </div>
        <div onClick={() => {
          handleProductoClick(data)
          context.setOpen(context.open = true)
        }} className="bg-gray-400 w-6 h-6 absolute bottom-6 left-14 flex justify-center items-center rounded-lg cursor-pointer">
          <EyeIcon className="size-3 border-[1px] border-black rounded-full bg-black text-gray-400"></EyeIcon>
        </div>
      </figure>
    </div>
  );
}

export default CardNormal;