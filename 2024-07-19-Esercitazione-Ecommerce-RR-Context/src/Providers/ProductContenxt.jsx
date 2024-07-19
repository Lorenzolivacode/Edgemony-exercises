import { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();
export const SetProductContext = createContext();
export function ProductProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    console.log("log Provider", productsCart);
    [productsCart];
  });

  return (
    <ProductContext.Provider value={{ productsCart }}>
      <SetProductContext.Provider value={{ setProductsCart }}>
        {children}
      </SetProductContext.Provider>
    </ProductContext.Provider>
  );
}
