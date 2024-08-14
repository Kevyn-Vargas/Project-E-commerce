import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import CardNormal from "../../Components/CardNormal";
import { data } from "autoprefixer";

const url = "https://fakestoreapi.com/products";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <CardNormal key={item.id} data={item} />
        ))}
      </div>
      <CardNormal />
    </Layout>
  );
}

export default Home;


/* function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('URL API')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  console.log(data);
  
  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
    </Layout>
  )
}

export default Home */