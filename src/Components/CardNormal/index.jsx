import { useState, useEffect } from "react";

function CardNormal({ data }) {
  const [categoria, setCategoria] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(() => {
    if (data) {
      setCategoria(data?.category);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setImagen(data?.image);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setTitle(data?.title);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setPrice(data?.price);
    }
  }, [data]);

  console.log(data);

  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 roundend-lg text-black text-xs m-2 px-3 py-0.5">
          {categoria
            ? data.category.charAt(0).toUpperCase() + data.category.slice(1)
            : "Waiting..."}
        </span>
        <img
          className="w-full h-full object-cover rounden-lg"
          src={imagen}
          alt="Headphones"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
}

export default CardNormal;


/* const CardNormal = (data) => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default CardNormal */