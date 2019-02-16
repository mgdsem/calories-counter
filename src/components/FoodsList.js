import React from 'react';
import FoodListItem from './FoodsListItem';

const FoodsList = (props) => (
    <ul>
        {props.foods.map(food => (
            <FoodListItem key={food.id} text={food.text} removeFoodItem={props.removeFoodItem} id={food.id} />
        ))}


    </ul>
);

export default FoodsList;

