import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'

//Tecnicamente este es el modal

function ProductDetails() {
  const context = useContext(ShoppingCartContext)
  const { open, setOpen } = useContext(ShoppingCartContext)

  const handleClick = () => {
    setOpen(!open)
  }

  const productDefault = {
    title: "Producto Default",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    category: "Nombre de la categoria del producto",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem quidem eaque doloremque earum esse quos soluta ipsum, quod eum, quis laborum nobis ipsam sunt corrupti! Doloremque dolor similique consequuntur?",
    price: 22.33
  }

  const addProductsToCart = () => {
    const productExists = context.cartProducts.some(object => object.id === context.productoSeleccionado.id); // dará true si el producto ya se encuentra en el carrito

    context.setShowNotification(true);

    if (productExists) {
      // valida la existencia
      const productCart = context.cartProducts.find(object => object.id === context.productoSeleccionado.id); // busca el producto
      productCart.quantity += 1; // aumenta la cantidad en 1
    } else {
      context.productoSeleccionado.quantity = 1; // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
      context.setCartProducts([...context.cartProducts, context.productoSeleccionado]);
    }
  }


  const formattedPrice = (context.productoSeleccionado?.price ?? 0) * (context.currencyValueSelected ?? 1);

  // Formatear el resultado con toLocaleString
  const finalPrice = formattedPrice.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "hidden invisible"
        }`}
    >
      <div className={`fixed inset-0 bg-black/50 ${open ? 'block' : 'hidden'}`} />
      <div className={`fixed inset-0 flex justify-center items-center z-50 mt-6 -mb-10 ${open ? 'block' : 'hidden'}`}>
        <div className=" flex bg-white rounded-lg p-8 w-3/4 h-3/4 -sm:w-5/6">
          <div className="flex justify-content-center">
            <div className="flex items-center">
              <img
                src={context.productoSeleccionado?.image || productDefault.image}
                alt="Product Image"
                className="w-3/5 -sm:w-1/2 -md:w-1/2 h-full object-contain rounden-lg mr-4"
              />
              <div className="bg-gray-200 p-4 rounded-lg w-1/2 h-full flex flex-col -sm:text-xs">
                <XMarkIcon onClick={handleClick} className="fixed top-24 -sm:top-16 -sm:right-4 right-6 size-6 p-1 text-white bg-red-600 rounded-lg cursor-pointer"></XMarkIcon>
                <h2 className="text-xl font-bold -sm:text-sm">{context.productoSeleccionado?.title.charAt(0).toUpperCase() + context.productoSeleccionado?.title.slice(1) || productDefault.title}</h2>
                <p className="text-slate-600 font-semibold text-sm -sm:text-xs">{context.productoSeleccionado?.category.charAt(0).toUpperCase() + context.productoSeleccionado?.category.slice(1) || productDefault.category}</p>
                <p className="text-gray-600 my-4 h-auto overflow-y-auto scrollbar-track-transparent scrollbar-thin scrollbar-thumb-slate-600">{context.productoSeleccionado?.description.charAt(0).toUpperCase() + context.productoSeleccionado?.description.slice(1) || productDefault.description}</p>
                <div className="flex justify-around mt-7 -sm:block -md:block">
                  <p className="text-gray-800 font-bold text-2xl -sm:text-sm -md:text-lg">Price: ${finalPrice || productDefault.price}</p>
                  <button
                    onClick={addProductsToCart}
                    className="bg-green-600 hover:bg-green-700 text-white w-3/6 -sm:w-full -md:w-full font-bold py-2 px-4 rounded self-center">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;