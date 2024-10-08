import { useContext } from "react";
import Layout from "../../Components/Layout";
import CardNormal from "../../Components/CardNormal";
import ProductDetails from "../../Components/ProductDetails";
import { ShoppingCartContext } from "../../Context";
import MnsjProductAdd from "../../Components/MnsjProductAdd";
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

function Home() {
  const context = useContext(ShoppingCartContext);

  const handleNotificationClose = () => {
    context.setShowNotification(false);
  };

  const currentPath = window.location.pathname;
  
  // Decodificar la última parte de la URL para manejar caracteres especiales
  let index = decodeURIComponent(currentPath.substring(currentPath.lastIndexOf('/') + 1));

  return (
    <Layout>
      <input
        className={`block w-1/3 rounded-md border border-slate-300 shadow-sm placeholder-slate-400
          focus:outline-none focus:border-black pl-1 my-12 py-2 ${index ? 'bg-gray-300 cursor-not-allowed' : ''}`}
        type="text"
        placeholder="Search..."
        onChange={(event) => context.setSearched(event.target.value)}
        disabled={!!index}
      />
      {/* Mostrar la notificación si está activa */}
      {context.showNotification && (
        <MnsjProductAdd
          message="Se ha agregado un producto al carrito"
          onClose={handleNotificationClose}
        />
      )}
      
      <div className="grid gap-7 grid-cols-4 w-full max-w-screen-lg">
        {
        index
         ? context.items?.filter(item => item.category === index).map((item) => (
             <CardNormal key={item.id} data={item} />
           ))
          // Si hay búsqueda activa, mostrar productos filtrados por búsqueda
         : context.searched?.length > 0
          ? context.filteredItems?.map((item) => (
            <CardNormal key={item.id} data={item} />
          ))
          // Si hay categoría seleccionada, mostrar productos filtrados por categoría
              // Si no hay búsqueda y no hay categoría, mostrar todos los productos
              : context.items?.map((item) => (
                  <CardNormal key={item.id} data={item} />
                ))
        }
      </div>
      {
        // Si hay búsqueda pero no se encuentran productos filtrados
        context.searched?.length > 0 && context.filteredItems?.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full py-20 text-center">
            <ExclamationCircleIcon className="w-20 h-20 text-red-500 animate-bounce mb-4" />
            <h1 className="text-3xl font-semibold mb-2">Oops! Nothing found</h1>
            <p className="text-gray-500 mb-4">
              We couldn't find what you're looking for. Please try again later or search for something else.
            </p>
          </div>
        )
      }
      <ProductDetails />
    </Layout>
  );
}

export default Home;