import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  const styles = {
    color: "red",
    cursor: "pointer"
  };

  return (
    <div className="cart-item">
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => removeFromCart(item.id)}
        style={styles}
      />
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}
// onClick={removeFromCart(item.id)} ---> not working
