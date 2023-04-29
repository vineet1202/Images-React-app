import React, { useContext } from "react";
import { CartContext } from "../Context";
import Image from "../Components/Image";
import { getClass } from "../utils";

export default function Photos() {
  const { photosArr } = useContext(CartContext);
  // console.log(photosArr)
  const imageElements = photosArr.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return <div className="photos">{imageElements}</div>;
}
