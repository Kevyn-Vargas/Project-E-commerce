import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function ProductShoppingCart(props) {
    const context = useContext(ShoppingCartContext)
    const { id, title, imageUrl, price, quantity, handleDelete } = props;
    const { increaseQuantity, decreaseQuantity } = useContext(ShoppingCartContext);

    return (
        <div className={`flex justify-between items-center bg-white px-14 py-5 rounded ${handleDelete ? "border-b-8" : ""}`}>
            <div className="flex items-center">
                <figure className="w-40 h-40">
                    <img src={imageUrl} alt={title} className="w-full h-full rounded-lg object-cover"/>
                </figure>
                <div className=" w-full ml-10">
                    <h3 className="text-lg font-medium">{title}</h3>
                    <div className="flex items-center">
                        {
                            handleDelete ? (
                                <>
                                    <p className="text-gray-500 mx-2">Cantidad</p>
                                    <button
                                        className="bg-red-200 rounded-md text-gray-500 hover:text-gray-700"
                                        onClick={() => {
                                            decreaseQuantity(id);
                                        }}
                                    >
                                        <MinusIcon className="size-4" />
                                    </button>
                                    <span className="mx-2">{quantity}</span>
                                    <button
                                        className="bg-green-200 rounded-md text-gray-500 hover:text-gray-700"
                                        onClick={() => {
                                            increaseQuantity(id);
                                        }}
                                    >
                                        <PlusIcon className="size-4" />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="text-gray-500 mx-2">Cantidad</p>
                                    <span className="mx-2">{quantity}</span>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                handleDelete &&
                <div className="flex items-center">
                    <span className="mx-4">${parseFloat((price * quantity * context.currencyValueSelected).toFixed(1))
                        .toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</span>
                    <button onClick={() => handleDelete(id)} className="flex bg-red-500 rounded-md p-1 text-sm text-white hover:bg-red-600">Delete <TrashIcon className="size-5 ml-1" /></button>
                </div>
            }
        </div>
    );
}

export default ProductShoppingCart;
