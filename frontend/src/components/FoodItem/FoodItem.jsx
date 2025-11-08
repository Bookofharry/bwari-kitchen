import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);
  const quantity = cartItems[id] || 0;

  // Safely format price with commas: 1000 -> 1,000 etc.
  const numericPrice = Number(price);
  const formattedPrice = !isNaN(numericPrice)
    ? numericPrice.toLocaleString('en-NG') // change locale if needed
    : price;

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(id);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (quantity > 0) removeFromCart(id);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-wrapper">
        <img
          className="food-item-image"
          src={`${url}/images/${image}`}
          alt={name}
          loading="lazy"
        />

        {quantity > 0 && (
          <div className="food-item-in-cart-pill">
            In cart • {quantity}
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <img
            className="food-item-rating"
            src={assets.rating_starts}
            alt="Rating"
          />
        </div>

        <p className="food-item-desc">{desc}</p>

        <div className="food-item-bottom-row">
          <p className="food-item-price">
            {currency}{formattedPrice}
          </p>

          {quantity === 0 ? (
            <button
              className="food-item-add-btn"
              onClick={handleAdd}
              aria-label={`Add ${name} to cart`}
            >
              <img
                src={assets.add_icon_white}
                alt=""
                aria-hidden="true"
                className="food-item-add-icon"
              />
              <span>Add am for Basket</span>
            </button>
          ) : (
            <div
              className="food-item-qty-control"
              aria-label={`${name} quantity control`}
            >
              <button
                className="qty-btn"
                onClick={handleRemove}
                aria-label={`Remove one ${name} from cart`}
              >
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                className="qty-btn"
                onClick={handleAdd}
                aria-label={`Add one more ${name} to cart`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
