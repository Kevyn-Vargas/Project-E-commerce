import { useEffect, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import ProductShoppingCart from "../../Components/ProductShoppingCart";
import "./style.css"

function ShoppingCart() {
  const context = useContext(ShoppingCartContext);
  const [showNotification, setShowNotification] = useState(false);

  const totalQuantity = context.cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
  };

  const impuestos = parseFloat(totalQuantity.toFixed(1)) * 0.19

  useEffect(() => {
    // Cambiar el fondo del body a gris cuando se monta el componente
    document.body.style.backgroundColor = "#E5E7EB";

    // Restaurar el fondo del body cuando se desmonta el componente
    return () => {
      document.body.style.backgroundColor = ''; // Esto lo restaura al valor predeterminado
    };
  }, []);

  // Mostrar notificación por 10 segundos cuando el carrito está vacío
  useEffect(() => {
    if (totalQuantity === 0) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false); // Ocultar notificación después de 10 segundos
      }, 10000); // 10000ms = 10 segundos
      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [totalQuantity]);

  return (
    <div className="pt-16 flex flex-col">
      <div className="flex justify-items-center justify-evenly py-16 -sm:flex-col -sm:items-center -sm:mx-auto -md:flex-col -md:items-center">
        {
          context.cartProducts.length === 0 ? (
            <div>
              <div className="text-lg font-medium">
                The shopping cart is empty. You can add products from the different shopping sections.
              </div>
              <div className="mx-56 mt-8">
                <div className="loader">
                  <div className="truckWrapper">
                    <div className="truckBody">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 198 93"
                        className="trucksvg"
                      >
                        <path
                          strokeWidth="3"
                          stroke="#282828"
                          fill="#F83D3D"
                          d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                        ></path>
                        <path
                          strokeWidth="3"
                          stroke="#282828"
                          fill="#7D7C7C"
                          d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                        ></path>
                        <path
                          strokeWidth="2"
                          stroke="#282828"
                          fill="#282828"
                          d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
                        ></path>
                        <rect
                          strokeWidth="2"
                          stroke="#282828"
                          fill="#FFFCAB"
                          rx="1"
                          height="7"
                          width="5"
                          y="63"
                          x="187"
                        ></rect>
                        <rect
                          strokeWidth="2"
                          stroke="#282828"
                          fill="#282828"
                          rx="1"
                          height="11"
                          width="4"
                          y="81"
                          x="193"
                        ></rect>
                        <rect
                          strokeWidth="3"
                          stroke="#282828"
                          fill="#DFDFDF"
                          rx="2.5"
                          height="90"
                          width="121"
                          y="1.5"
                          x="6.5"
                        ></rect>
                        <rect
                          strokeWidth="2"
                          stroke="#282828"
                          fill="#DFDFDF"
                          rx="2"
                          height="4"
                          width="6"
                          y="84"
                          x="1"
                        ></rect>
                      </svg>
                    </div>
                    <div className="truckTires">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 30"
                        className="tiresvg"
                      >
                        <circle
                          strokeWidth="3"
                          stroke="#282828"
                          fill="#282828"
                          r="13.5"
                          cy="15"
                          cx="15"
                        ></circle>
                        <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 30"
                        className="tiresvg"
                      >
                        <circle
                          strokeWidth="3"
                          stroke="#282828"
                          fill="#282828"
                          r="13.5"
                          cy="15"
                          cx="15"
                        ></circle>
                        <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
                      </svg>
                    </div>
                    <div className="road"></div>

                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 453.459 453.459"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      version="1.1"
                      fill="#000000"
                      className="lampPost"
                    >
                      <path
                        d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) :
            (
              <div className="w-7/12 -sm:w-full -md:w-full flex flex-col justify-evenly">
                {
                  context.cartProducts.map(product => (
                    <ProductShoppingCart
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageUrl={product.image}
                      price={product.price}
                      quantity={product.quantity}
                      handleDelete={handleDelete}
                    />
                  ))
                }
              </div>
            )
        }
        {
          context.cartProducts.length === 0 ? (
            <></>
          ) : (
            <div className="bg-white w-1/4 -md:w-3/6 -sm:w-4/6 h-60 p-4 rounded">
              <h2 className="text-lg font-bold">Purchase summary</h2>
              <div className="flex justify-between my-1">
                <span>Total</span>
                <span>${(parseFloat(totalQuantity.toFixed(1)) * context.currencyValueSelected)
                  .toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between my-1">
                <span>Taxes [19%]</span>
                <span>${(parseFloat(impuestos.toFixed(1)) * context.currencyValueSelected)
                  .toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between my-1">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between my-2 mb-0">
                <span className="font-bold">Total</span>
                <span className="font-bold">${(parseFloat((totalQuantity + impuestos).toFixed(1)) * context.currencyValueSelected)
                  .toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</span>
              </div>
              {totalQuantity > 0 ? (
                <>
                  <Link to="/payment">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                      Buy Now
                    </button>
                  </Link>
                </>
              ) : (
                <div>
                  {showNotification && (
                    <div className={`notification transition-opacity duration-700 ease-in-out bg-red-500 text-white p-4 rounded mt-4 ${showNotification ? 'opacity-100' : 'opacity-0'}`}>
                      Your cart is empty. You need to add a product.
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        }
      </div >
    </div >
  );
}

export default ShoppingCart;