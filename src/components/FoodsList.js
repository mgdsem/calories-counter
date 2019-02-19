import React from 'react';
import FoodListItem from './FoodsListItem';

const FoodsList = ({
    foods,
    removeFoodItem
}) => (
        <div>
            <ul>
                {foods.map(food => (
                    <FoodListItem
                        key={food.id}
                        text={food.text}
                        removeFoodItem={removeFoodItem}
                        id={food.id}
                        eatenAt={food.eatenAt}
                    />
                ))}
            </ul>

            <p className="list__display-sum">
                {`${foods.reduce((acc, currentValue) => Number(acc) + Number(currentValue.calories), 0)} kcal`}
            </p>
        </div>
    );

export default FoodsList;

