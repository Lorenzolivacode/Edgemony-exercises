import styles from "./product-light-box.module.css";
import classNames from "classnames";
import { useState } from "react";

import Img01 from "./../../assets/img-Simpson/img01.jpg";
import Img03 from "./../../assets/img-Simpson/img03.jpg";
import Img04 from "./../../assets/img-Simpson/img04.jpg";
import Img06 from "./../../assets/img-Simpson/img06.jpg";

const productImg = [
  {
    id: self.crypto.randomUUID(),
    product: Img01,
    thumbNail: Img01,
  },
  {
    id: self.crypto.randomUUID(),
    product: Img03,
    thumbNail: Img03,
  },
  {
    id: self.crypto.randomUUID(),
    product: Img04,
    thumbNail: Img04,
  },
  {
    id: self.crypto.randomUUID(),
    product: Img06,
    thumbNail: Img06,
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
                alt="Image"
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
