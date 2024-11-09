function Contact() {
  return (
    <div className="mt-28">
      <div className="flex flex-col  items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 text-center mb-4">
        Hello! My name is <b>Kevin Vargas</b>, and this is my e-commerce application.
        </p>
        <p className="text-gray-700 text-center mb-4">
        This application allows you to browse products, view details, add to cart, and view the updated price in different currencies.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Social Networking</h3>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/kevyn-vargas/" target="_blank" rel="noopener noreferrer">
            Linkendin
          </a>
          <a href="https://www.instagram.com/__kevin_vargas__/?hl=es" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://github.com/Kevyn-Vargas" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2">APIs Used</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><b>FakeStore API</b>: For products.</li>
          <li><b>ExchangeRate API</b>: To convert prices to different currencies.</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact