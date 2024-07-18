import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card";

export function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("productsCart")) || [];
    setCartItems(products);
    console.log("products", products);
  }, []);

  useEffect(() => {
    console.log("cartItems: ", cartItems);

    const total = cartItems.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const removeItemCart = (e) => {
    const id = e.target.id;
    const newCart = cartItems.filter((p) => p.id !== Number(id));
    setCartItems(newCart);

    console.log("id: ", id);

    localStorage.setItem(`productsCart`, JSON.stringify(newCart));
  };
  {
    /* Non sono riuscito a renderizzare subito la rimozione */
  }

  const emptyCart = () => {
    setCartItems([]);
    localStorage.removeItem("productsCart");
  };
  if (!cartItems.length)
    return (
      <h2 className="text-center font-bold text-xl p-11">Cart is empty</h2>
    );
  return (
    <div className="w-full relative">
      <div className="absolute top-6 left-6 flex flex-col gap-4">
        <button
          onClick={emptyCart}
          className="bg-red-300/40 p-2 rounded-lg border-solid border-2 border-red-950 text-red-950 w-full"
        >
          Cancel Cart
        </button>
        <p>N° products: {cartItems.length}</p>
        <p>Total: ${totalPrice}</p>
      </div>

      <div className="flex flex-wrap gap-12 justify-center items-center p-20 px-28">
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
    </div>
  );
}

export default Cart;
