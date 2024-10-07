import { useContext } from "react"
import Layout from "../../Components/Layout"
import CardOrders from "../../Components/CardOrders"
import { ShoppingCartContext } from "../../Context";


function Orders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <p className="mt-10"></p>
      {
        context.order.map((order, index) => (
          <div key={index}>
            <CardOrders
              index={index}
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </div>
        ))}
    </Layout>
  )
}

export default Orders