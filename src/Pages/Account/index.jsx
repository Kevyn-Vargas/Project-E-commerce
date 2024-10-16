import React, { useState, useContext } from 'react';
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from '../../Context';

function Account() {
  const { setCartProducts } = useContext(ShoppingCartContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión (aquí podrías integrar la lógica con tu backend)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    context.setOrder([]);
    context.setCartProducts([]);
    alert('LocalStorage cleared!');
  };

  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem('cartProducts');
    alert('Cart cleared!');
  };

  const logout = () => {
    // Lógica para cerrar sesión (aquí puedes limpiar la sesión de usuario y redirigir)
    alert('Logged out!');
    // Por ejemplo, redirigir a la página de inicio
    window.location.href = '/';
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Account</h2>

          <form onSubmit={handleLogin} className="mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between mb-4">
            <button
              onClick={clearLocalStorage}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Clear LocalStorage
            </button>
            <button
              onClick={clearCart}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Clear Cart
            </button>
          </div>

          <button
            onClick={logout}
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Account;