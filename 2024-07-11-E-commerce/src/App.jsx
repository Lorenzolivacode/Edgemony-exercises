import { useState } from "react";
import styles from "./App.module.css";

import { Layout } from "./Components/LayoutApp/Layout.jsx";
import { ProductLightBox } from "./Components/ProductLightBox/ProductLightBox.jsx";
import { Button } from "./Components/Button/Button.jsx";

function App() {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <ProductLightBox />
          <Button></Button>
        </div>
      </Layout>
    </>
  );
}

export default App;
