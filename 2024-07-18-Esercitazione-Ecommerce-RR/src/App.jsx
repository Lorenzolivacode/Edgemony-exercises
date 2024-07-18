import { useState, useEffect } from "react";
import { Card } from "./Components/Card";

function App() {
  const [products, setProducts] = useState([]);

  const setLocalStorage = (product) => {
    localStorage.setItem(`product-${product.id}`, JSON.stringify(product));
  };

  useEffect(() => {
    console.log("prova1", products);

    fetch(`https://api.escuelajs.co/api/v1/products/`)
      .then((res) => res.json())
      .then((res) => setProducts(res.slice(1, 13)));

    console.log("prova2", products);
  }, []);

  useEffect(() => {
    console.log("prova3", products);
    /* console.log("images", products[0].images[0]); */
  }, [products]);

  return (
    <>
      <h1 className="text-center font-bold w-full mb-8 mt-8">Shop NOW!</h1>
      <div className="flex flex-wrap gap-8 w-1/2 m-auto ">
        {products.map((product) => (
          <Card
            key={product.id}
            /* img={product.images[1].slice(1, product.images[1].lenght)} */
            /* img={product.images[0]}
            price={product.price} */
            product={product}
            btnText={"Add cart"}
            onClick={() => setLocalStorage(product)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
