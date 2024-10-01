import { useContext } from "react"
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout"
import CardOrders from "../../Components/CardOrders"
import { ShoppingCartContext } from "../../Context";


function Orders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
        <h1>My Orders</h1>
      {
        context.order.map((order, index) => {
          <Link key={index} to={`/orders/${order.id}`}>
            <CardOrders
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        })
      }
    </Layout>
  )
}

export default Orders