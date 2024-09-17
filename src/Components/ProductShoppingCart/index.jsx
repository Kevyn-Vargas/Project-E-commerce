import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function ProductShoppingCart(props) {
    const { id, title, imageUrl, price, quantity } = props;
    const { increaseQuantity, decreaseQuantity } = useContext(ShoppingCartContext);

    return (
        <div className="flex justify-between items-center bg-white px-14 py-5 rounded border-b-8">
            <div className="flex items-center">
                <figure className="w-40 h-40">
                    <img src={imageUrl} alt={title} className="w-full h-full rounded-lg object-cover" />
                </figure>
                <div className=" w-full ml-10">
                    <h3 className="text-lg font-medium">{title}</h3>
                    <div className='flex items-center'>
                        <p className="text-gray-500 mx-2">Cantidad </p>
                        <button 
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => decreaseQuantity(id)}
                        >
                            <MinusIcon className="size-4" />
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button 
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => increaseQuantity(id)}
                        >
                            <PlusIcon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <span className="mx-4">${price * quantity}</span>
                <button className="text-red-500 hover:text-red-700">Eliminar</button>
            </div>
        </div>
    );
}

export default ProductShoppingCart;
