import React, { useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredItems =
    category === 'All'
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>  PREMIUM QUALITY FOOD, MADE JUST FOR YOU</h2>

      <div className="food-display-list">
        {filteredItems.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            desc={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
