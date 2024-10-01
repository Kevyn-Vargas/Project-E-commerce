import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/solid';

function CardOrders(props) {
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center bg-white px-14 py-5 rounded border-b-8 border-black">
            <p>
                <span> Date: 01.02.34</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
}

export default CardOrders;
