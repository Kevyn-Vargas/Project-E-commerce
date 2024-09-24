import React, { useEffect } from 'react';
import "./styles.css"

function MnsjProductAdd({ message, onClose }) {
  useEffect(() => {
    // Hace que el mensaje desaparezca después de 3 segundos
    const timer = setTimeout(() => {
      onClose();
    }, 800);

    return () => clearTimeout(timer); // Limpia el timer cuando el componente se desmonta
  }, [onClose]);

  return (
    <div className="notification bg-green-500 text-white p-3 rounded fixed top-20 right-5">
      {message}
    </div>
  );
}

export default MnsjProductAdd
