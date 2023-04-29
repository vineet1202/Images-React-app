import React, { useState, useContext } from "react";
import CartItem from "../Components/CartItem";
import { CartContext } from "../Context";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(CartContext);
  // console.log(cartItems)
  const products = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const totalCost = 5.9 * cartItems.length;

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("order placed");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {products}
      <p className="total-cost">Total: ${totalCost} </p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          <p className="xyz">
            No items in your cart{" "}
            <span role="img" aria-label="emoji">
              🛒
            </span>
          </p>
        )}
      </div>
    </main>
  );
}

export default Cart;
