import styles from "./product-light-box.module.css";
import classNames from "classnames";
import { useState } from "react";

const productImg = [
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/image-product-1.jpg",
    thumbNail: "./src/assets/images/image-product-1-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/image-product-2.jpg",
    thumbNail: "./src/assets/images/image-product-2-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/image-product-3.jpg",
    thumbNail: "./src/assets/images/image-product-3-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/image-product-4.jpg",
    thumbNail: "./src/assets/images/image-product-4-thumbnail.jpg",
  },
];

export function ProductLightBox() {
  const initialValue = productImg[0];
  const [selectedProductImg, setSelectedProductImg] = useState(initialValue);

  const handleSelected = (id) => {
    const selectedImg = productImg.find((img) => img.id === id);
    setSelectedProductImg(selectedImg);
  };

  return (
    <div className={classNames(styles["product-lightbox"])}>
      <div className={classNames(styles.showBox)}>
        <img src={selectedProductImg.product} />
      </div>
      <ul className={classNames(styles["tumbnail-list"])}>
        {productImg.map((img) => {
          return (
            <li
              key={img.id}
              className={classNames(
                img.id === selectedProductImg.id && styles["list-selected"]
              )}
              onClick={() => handleSelected(img.id)}
            >
              <img
                src={img.thumbNail}
                alt=""
                className={classNames(
                  img.id === selectedProductImg.id && styles["img-over"]
                )}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
