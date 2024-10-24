import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

function Payment() {

  const navigate = useNavigate();
  const context = useContext(ShoppingCartContext);

  const totalQuantity = context.cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    email: '',
  });

  const [paymentData] = useState({
    cardNumber: '4111 1111 1111 1111', // Número de tarjeta de ejemplo
    expiryDate: '12/25', // Fecha de expiración predeterminada
    cvv: '123', // CVV predeterminado
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAutoFill = () => {
    const exampleData = {
      fullName: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      country: 'USA',
      phoneNumber: '555-1234',
      email: 'johndoe@example.com',
    };

    setFormData(exampleData);
  };

  const handleCheckout = () => {

    const date = new Date();

    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalQuantity,
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);

    // Redirigir a /myOrder
    navigate(`/orders/last`); // Redirigir a la página después de ejecutar la función
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si todos los campos están llenos
    if (
      formData.fullName &&
      formData.address &&
      formData.city &&
      formData.postalCode &&
      formData.country &&
      formData.phoneNumber &&
      formData.email
    ) {
      setFormSubmitted(true); // Simular la compra realizada
      handleCheckout();
      setTimeout(() => {
        setFormSubmitted(false); // Ocultar la notificación después de 3 segundos
      }, 5000);
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-28">
      {/* Botón para autocompletar el formulario */}
      <div className="text-right mb-4">
        <button
          type="button"
          onClick={handleAutoFill}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Automatically add your card data
        </button>
      </div>

      {/* Formulario de pago */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Shipping Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Adress
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Adress"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="City"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
              Zip Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Zip Code"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Country"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              required
            />
          </div>
        </div>

        {/* Sección de pago con tarjeta */}
        <h2 className="text-2xl font-bold mb-4 text-center">Pago con Tarjeta</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              readOnly // Campo no editable
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
              Expiration Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={paymentData.expiryDate}
              readOnly // Campo no editable
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={paymentData.cvv}
              readOnly // Campo no editable
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirm Purchase
        </button>
      </form>

      {/* Mensaje de confirmación */}
      {formSubmitted && (
        <div className="notification">
          Successful purchase!
        </div>
      )}
    </div>
  );
}

export default Payment;
