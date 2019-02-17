import React from 'react';
import FoodListItem from './FoodsListItem';

const FoodsList = ({
    foods,
    removeFoodItem
}) => (
        <ul>
            {foods.map(food => (
                <FoodListItem key={food.id} text={food.text} removeFoodItem={removeFoodItem} id={food.id} />
            ))}
        </ul>
    );

export default FoodsList;

