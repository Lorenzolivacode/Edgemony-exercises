import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "./../Components/Button";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center gap-16 min-h-screen">
      <div className="w-64">
        <img src={product.images[0]} alt="Image" />
        <div className="flex justify-between pt-8">
          <img src={product.images[1]} className="w-28" alt="Image" />
          <img src={product.images[2]} className="w-28" alt="Image" />
        </div>
      </div>
      <div className="w-64 flex flex-col gap-4 text-center">
        <p className="text-start bg-slate-500 pl-2 rounded-e-2xl text-slate-200">
          Category: {product.category.name}
        </p>
        <h1 className="font-bold text-slate-900 text-xl">{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: €{product.price}</p>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductPage;
