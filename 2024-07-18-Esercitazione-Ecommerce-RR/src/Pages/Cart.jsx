import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card";

export function Cart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    /* console.log("Storage: ", localStorage);
    console.log("Array Obj: ", Object.values(localStorage));
    console.log("Singol Obj: ", JSON.parse(Object.values(localStorage)[0])); */

    const products = [];
    Object.values(localStorage).map((p) => {
      let product = JSON.parse(p);
      /* console.log("Product: ", product);
      console.log("Product Title: ", product.title); */
      products.push(product);
    });
    setCartItems(products);
  }, []);

  useEffect(() => {
    console.log("Cart: ", cartItems);
    /*     console.log(cartItems[0]); */
  }, [cartItems]);

  const removeItemCart = (e) => {
    const id = e.target.id;
    const nameProduct = `product-${id}`;

    localStorage.removeItem(nameProduct);
    setCartItems(cartItems.filter((p) => p.id !== id));
    console.log("id: ", id);
    console.log("Product removed: ", nameProduct);
    console.log("cartItems: ", cartItems);
  };
  {
    /* Non sono riuscito a renderizzare subito la rimozione */
  }

  return (
    <div className="flex flex-wrap gap-12 justify-center items-center p-20">
      {cartItems.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
            /* idBtn={product.id}
            price={product.price}
            img={product.images[0]} */
            btnText={"Remove cart"}
            onClick={removeItemCart}
          />
        );
      })}
    </div>
  );
}

export default Cart;
