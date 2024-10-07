import { BanknotesIcon, RectangleStackIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

function generateUniqueId() {
    // Genera un ID con letras y números
    return Math.random().toString(36).substr(2, 9);
}

function CardOrders(props) {
    const { totalPrice, totalProducts, date, index } = props;

    const number = totalPrice.toFixed(2)
    const totalPriceRecorted = parseFloat(number)

    const validedDate = new Date(date)
    const options = { day: 'numeric', month: 'short', year: 'numeric' }; // Formato: 07 Oct 2024
    const formattedDate = validedDate.toLocaleDateString('en-US', options)

    const orderId = generateUniqueId();
    return (
        <div className='w-screen'>
            <div className="bg-white shadow-md rounded-lg p-6 w-3/5 mx-auto hover:bg-gray-200">
                <Link to={`/orders/${index}`}>
                    <h2 className="text-xl font-semibold mb-4">Purchase Summary</h2>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <RectangleStackIcon className='size-7 p-1' />
                            <p>Total Products: {totalProducts}</p>
                        </div>
                        <p className='text-gray-700 font-normal'>Order ID: {orderId}</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <BanknotesIcon className='size-7 p-1' />
                            <p>Total Price: ${totalPriceRecorted}</p>
                        </div>
                        <p className='text-gray-500 font-light'>Payment by card</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <CalendarDaysIcon className='size-7 p-1' />
                            <p>Purchase Time: {date}</p>
                        </div>
                        <p className='text-gray-500 font-light'>{formattedDate}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardOrders
