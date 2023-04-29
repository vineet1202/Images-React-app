import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context";

function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="navbar">
      <Link to="/" className="title">
        Pic Some
      </Link>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
      </Link>
      <p className={cartItems.length > 0 ? "cart-num" : "cart-num-zero"}>
        {cartItems.length}
      </p>
    </div>
  );
}

export default Header;
