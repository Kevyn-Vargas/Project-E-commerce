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

  /*   window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
          if (open) {
              handleClick();
          }
      }
  }) */

  const productDefault = {
    title: "Producto Default",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    category: "Nombre de la categoria del producto",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem quidem eaque doloremque earum esse quos soluta ipsum, quod eum, quis laborum nobis ipsam sunt corrupti! Doloremque dolor similique consequuntur?",
    price: 22.33
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "hidden invisible"
        }`}
    >
      <div className={`fixed inset-0 bg-black/50 ${open ? 'block' : 'hidden'}`} />
      <div className={`fixed inset-0 flex justify-center items-center z-50 mt-6 -mb-10 ${open ? 'block' : 'hidden'}`}>
        <div className=" flex bg-white rounded-lg p-8 w-3/4 h-3/4">
          <div className="flex justify-content-center">
            <div className="flex items-center">
              <img
                src={context.productoSeleccionado?.image || productDefault.image}
                alt="Product Image"
                className="w-3/5 h-full object-contain rounden-lg mr-4"
              />
              <div className="bg-gray-200 p-4 rounded-lg w-1/2 h-full flex flex-col">
              <XMarkIcon onClick={handleClick} className="fixed top-[115px] right-[175px] size-6 p-1 text-white bg-red-600 rounded-lg cursor-pointer"></XMarkIcon>
                <h2 className="text-xl font-bold">{context.productoSeleccionado?.title.charAt(0).toUpperCase() + context.productoSeleccionado?.title.slice(1) || productDefault.title}</h2>
                <p className="text-teal-700 font-semibold text-sm">{context.productoSeleccionado?.category.charAt(0).toUpperCase() + context.productoSeleccionado?.category.slice(1) || productDefault.category}</p>
                <p className="text-gray-600 my-4 h-auto overflow-y-auto scrollbar-track-transparent scrollbar-thin scrollbar-thumb-teal-700">{context.productoSeleccionado?.description.charAt(0).toUpperCase() + context.productoSeleccionado?.description.slice(1) || productDefault.description}</p>
                <div className="flex justify-around mt-7">
                  <p className="text-gray-800 font-bold text-2xl">Price: ${context.productoSeleccionado?.price || productDefault.price}</p>
                  <button className="bg-orange-900 text-white w-3/6 hover:bg-orange-700 font-bold py-2 px-4 rounded self-center">
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