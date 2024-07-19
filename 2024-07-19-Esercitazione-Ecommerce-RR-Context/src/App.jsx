import { useState, useEffect, useContext } from "react";
import { Card } from "./Components/Card";

import { SetProductContext } from "./Providers/ProductContenxt.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [arrayStorage, setArrayStorage] = useState([]);

  const { setProductsCart } = useContext(SetProductContext);

  /* const setLocalStorage = (product) => {
    const newArrayStorage = [...arrayStorage, product];
    setArrayStorage(newArrayStorage);
    localStorage.setItem("productsCart", JSON.stringify(newArrayStorage));
  }; */

  const addToCart = (product) => {
    setProductsCart((prevState) => [...prevState, product]);
  };

  useEffect(() => {
    console.log(arrayStorage);
  }, [arrayStorage]);

  useEffect(() => {
    console.log("prova1", products);

    fetch(`https://api.escuelajs.co/api/v1/products/`)
      .then((res) => res.json())
      .then((res) => setProducts(res.slice(1, 13)))
      .catch(() => console.log("c'è un errore nella fetch"));

    console.log("prova2", products);

    const storedCartItems = JSON.parse(localStorage.getItem("productsCart"));
    setArrayStorage(storedCartItems || []);
    console.log("Array: ", arrayStorage);
  }, []);

  useEffect(() => {
    console.log("prova3", products);
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
            onClick={() => addToCart(product)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
