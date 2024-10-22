import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import Layout from "../../Components/Layout"

function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center text-center animate-bounce">
          {/* Icono de exclamación */}
          <ExclamationCircleIcon className="h-24 w-24 text-red-500" />
          <h1 className="text-6xl font-bold text-gray-800 mt-4">404</h1>
          <p className="text-2xl text-gray-600 mt-2">Page Not Found</p>
          <p className="text-gray-500 mt-4">Oops! It looks like the page you're looking for doesn't exist.</p>
        </div>
        {/* Botón para volver a la página de inicio */}
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Go back to Home
        </a>
      </div>
    </Layout>
  )
}

export default NotFound