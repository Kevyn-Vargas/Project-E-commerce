import { useState, useEffect } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800); // medio segundo de retraso

    // Limpieza del temporizador en caso de que el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <footer className="bg-black text-gray-400 py-8 w-full mt-20">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Sección de navegación */}
        <nav className="flex space-x-6">
          <a href="/home" className="hover:text-white text-gray-500">Home</a>
          <a href="/account" className="hover:text-white text-gray-500">Account</a>
          <a href="/orders" className="hover:text-white text-gray-500">Orders</a>
          <a href="/contact" className="hover:text-white text-gray-500">Contact</a>
        </nav>

        {/* Redes sociales */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/kevyn-vargas/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com/Kevyn-Vargas" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.instagram.com/__kevin_vargas__/?hl=es" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
        </div>

        {/* Derechos de autor */}
        <p className="text-center text-xs">&copy; {new Date().getFullYear()} KVStore E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;