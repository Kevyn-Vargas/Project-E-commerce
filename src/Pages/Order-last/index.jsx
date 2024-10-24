import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import ProductShoppingCart from "../../Components/ProductShoppingCart"
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function OrderLast() {
  const context = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1


  return (
    <Layout>
      <div className="flex justify-between mt-6">
        <Link to="/orders" className="flex">
          <ChevronLeftIcon className="size-6 p-1 text-white bg-red-600 rounded-lg cursor-pointer" />
          <h1 className="ml-4">My Orders</h1>
        </Link>
      </div>
      <div className="w-7/12 flex flex-col justify-evenly">
        {
          context.order?.[index]?.products.map(product => (
            <ProductShoppingCart
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={(product.price * context.currencyValueSelected).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
              quantity={product.quantity}
            />
          ))
        }

      </div>
    </Layout>
  )
}

export default OrderLast