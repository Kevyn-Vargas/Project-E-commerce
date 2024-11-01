import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function Account() {
  const context = useContext(ShoppingCartContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.includes('@') && password.length >= 4) {
      context.setUserData({ email, password });
      console.log('Data stored in context:', email, password);
    } else {
      alert('Please enter a valid email address and a password of at least 4 characters.');
    }
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    context.setOrder([]);
    context.setCartProducts([]);
    context.setUserData({})
    alert('LocalStorage cleared!');
    window.location.href = '/';
  };

  const logout = () => {
    // Lógica para cerrar sesión (aquí puedes limpiar la sesión de usuario y redirigir)
    alert('Logged out!');
    context.setUserData()
    // Por ejemplo, redirigir a la página de inicio
    window.location.href = '/';
  };
  const passwordStar = context.userData?.password
    ? '*'.repeat(context.userData.password.length)
    : '';
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-16">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Account</h2>
        {context.userData.email ? <div className="mb-4">
          <p>Email: {context.userData.email}</p>
          <p>Password: {passwordStar}</p>
        </div> : <form onSubmit={handleLogin} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
        </form>}

        <button
          onClick={logout}
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Logout
        </button>
        <div className="flex mb-4">
          <button
            onClick={clearLocalStorage}
            className="hover:bg-gray-200 border-2 w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Clear all app data
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;