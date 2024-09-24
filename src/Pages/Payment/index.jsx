import React, { useState } from 'react';

function Payment() {
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
      setTimeout(() => {
        setFormSubmitted(false); // Ocultar la notificación después de 3 segundos
      }, 2500);
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-28">
      {/* Formulario de pago */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Información de Envío</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Nombre Completo
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nombre Completo"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Dirección"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              Ciudad
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ciudad"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
              Código Postal
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Código Postal"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              País
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="País"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Teléfono
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Teléfono"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Correo Electrónico"
              required
            />
          </div>
        </div>

        {/* Sección de pago con tarjeta */}
        <h2 className="text-2xl font-bold mb-4 text-center">Pago con Tarjeta</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
              Número de Tarjeta
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
              Fecha de Expiración
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
          Confirmar Compra
        </button>
      </form>

      {/* Mensaje de confirmación */}
      {formSubmitted && (
        <div className="notification">
          ¡Compra realizada con éxito!
        </div>
      )}
    </div>
  );
}

export default Payment;
