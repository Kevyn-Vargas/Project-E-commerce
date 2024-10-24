import { useContext } from "react"
import Layout from "../../Components/Layout"
import CardOrders from "../../Components/CardOrders"
import { ShoppingCartContext } from "../../Context";
import "./style.css"


function Orders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <p className="mt-10"></p>
      {
        context.order.length === 0 ? (
          <div className="flex flex-col items-center">
            <div className="text-lg font-medium my-5">
              Make your first purchase! Your orders will appear here.
            </div>
            <div>
              <div className="virtual-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 111 84"
                  height="84"
                  width="111"
                >
                  <rect
                    stroke-dasharray="4 4"
                    strokeWidth="2"
                    stroke="black"
                    fill="white"
                    transform="matrix(-1.31134e-07 1 1 1.31134e-07 -1.31134e-07 40.7759)"
                    rx="3.40064"
                    height="65.6552"
                    width="41.2241"
                    y="1"
                    x="1"
                  ></rect>
                  <rect
                    fill="black"
                    transform="rotate(-180 65.7758 58.6293)"
                    height="10.3362"
                    width="63.8966"
                    y="58.6293"
                    x="65.7758"
                  ></rect>
                  <path
                    className="plus-one"
                    strokeWidth="2"
                    stroke="black"
                    d="M70.8334 15L70.8334 19.6954M70.8334 19.6954H66.1379M70.8334 19.6954H75.5288M70.8334 19.6954V24.3909"
                  ></path>
                  <path
                    className="plus-two"
                    strokeWidth="2"
                    stroke="black"
                    d="M93.955 39L93.955 45.8171M93.955 45.8171H87.1379M93.955 45.8171H100.772M93.955 45.8171V52.6341"
                  ></path>
                  <path
                    className="plus-three"
                    strokeWidth="2"
                    stroke="black"
                    d="M99.9622 0L99.9622 10.8242M99.9622 10.8242H89.1379M99.9622 10.8242H110.786M99.9622 10.8242V21.6484"
                  ></path>
                  <path
                    className="plus-four"
                    strokeWidth="2"
                    stroke="black"
                    d="M87.4913 22L87.4913 26.3535M87.4913 26.3535H83.1379M87.4913 26.3535H91.8448M87.4913 26.3535V30.7069"
                  ></path>
                  <path
                    className="plus-five"
                    strokeWidth="2"
                    stroke="black"
                    d="M77.8447 1V3.70685M77.8447 3.70685H75.1379M77.8447 3.70685H80.5516M77.8447 3.70685V6.4137"
                  ></path>
                  <path
                    className="plus"
                    strokeWidth="2"
                    stroke="black"
                    d="M76.8447 40V42.7068M76.8447 42.7068H74.1379M76.8447 42.7068H79.5516M76.8447 42.7068V45.4137"
                  ></path>
                </svg>
              </div>

            </div>
          </div>
        )
          : context.order.map((order, index) => (
            <div key={index}>
              <CardOrders
                index={index}
                date={order.date}
                totalPrice={(order.totalPrice * context.currencyValueSelected).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                totalProducts={order.totalProducts} />
            </div>
          ))
      }
    </Layout>
  )
}

export default Orders