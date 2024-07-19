import { useState } from "react";
import styles from "./App.module.css";

import { Layout } from "./Components/LayoutApp/Layout.jsx";
import { ProductLightBox } from "./Components/ProductLightBox/ProductLightBox.jsx";
import { ProductDescriptionBox } from "./Components/ProductDescriptionBox/ProductDescriptionBox.jsx";

const productPrice = 15;
const discountPercentage = 50;

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickCounter = (e) => {
    const id = e.target.id;
    if (id === "minus" && counter > 0) {
      setCounter(counter - 1);
    } else if (id === "plus") {
      setCounter(counter + 1);
    }
  };

  return (
    <div onClick={handleClickCounter}>
      <Layout counter={counter}>
        <div className={styles.container}>
          <ProductLightBox />
          <ProductDescriptionBox
            price={productPrice}
            discount={discountPercentage}
            counter={counter}
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
