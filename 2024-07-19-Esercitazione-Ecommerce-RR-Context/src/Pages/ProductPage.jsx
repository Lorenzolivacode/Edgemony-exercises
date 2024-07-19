import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Button } from "./../Components/Button";

import { SetProductContext } from "./../Providers/ProductContenxt";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const [arrayStorage, setArrayStorage] = useState([]);

  const { setProductsCart } = useContext(SetProductContext);

  const setLocalStorage = (product) => {
    const newArrayStorage = [...arrayStorage, product];
    setArrayStorage(newArrayStorage);
    localStorage.setItem("productsCart", JSON.stringify(newArrayStorage));
  };
  const addToCart = (product) => {
    setProductsCart((prevState) => [...prevState, product]);
  };

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      });

    const storedCartItems = JSON.parse(localStorage.getItem("productsCart"));
    setArrayStorage(storedCartItems || []);
    console.log("Array: ", arrayStorage);
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center gap-16 min-h-screen">
      <div className="w-64">
        <img
          src={product.images[0].slice(2, product.images[0].length)}
          alt="Image"
        />
        {/* <div className="flex justify-between pt-8">
          <img
            src={product.images[1].slice(1, product.images[1].length)}
            className="w-28"
            alt="Image"
          />
          <img
            src={product.images[2].slice(1, product.images[1].length)}
            className="w-28"
            alt="Image"
          />
        </div> */}
      </div>
      <div className="w-64 flex flex-col gap-4 text-center">
        <p className="text-start bg-slate-500 pl-2 rounded-e-2xl text-slate-200">
          Category: {product.category.name}
        </p>
        <h1 className="font-bold text-slate-900 text-xl">{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: €{product.price}</p>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductPage;
