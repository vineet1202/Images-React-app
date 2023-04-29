import React, { useState, useEffect } from "react";
const CartContext = React.createContext();

function CartContextProvider(props) {
  const [photosArr, setPhotosArr] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotosArr(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = photosArr.map((photo) => {
      if (photo.id === id) {
        //console.log(id);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotosArr(updatedArr);
  }
  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }
  console.log(cartItems);

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        photosArr,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
