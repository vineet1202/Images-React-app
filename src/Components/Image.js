import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context";
import PropTypes from "prop-types";

export default function Image({ img, className }) {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    CartContext
  );
  //console.log(photosArr);
  const RedStyle = {
    color: "#e31212"
  };
  const EmptyStyle = {};
  const cartStyle = {
    color: "#3b3732"
  };
  // const cartPlus = <FontAwesomeIcon className="plus-icon" icon={faCartCirclePlus} />
  // const cart = <FontAwesomeIcon icon={faCartShopping} />

  function icon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <FontAwesomeIcon
          icon={faCartShopping}
          className="plus-icon"
          style={cartStyle}
          onClick={() => removeFromCart(img.id)}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="plus-icon"
          onClick={() => addToCart(img)}
        />
      );
    }
  }

  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="" />
      <FontAwesomeIcon
        icon={faHeart}
        className="heart-icon"
        onClick={() => toggleFavorite(img.id)}
        style={img.isFavorite ? RedStyle : EmptyStyle}
      />
      {icon()}
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};
