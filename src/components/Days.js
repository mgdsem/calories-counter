import React from 'react';

import FoodsList from './FoodsList';

const Days = ({
    preparedDays,
    removeFoodItem
}) => (
        <div>
            {preparedDays.map((day) => (
                <FoodsList key={day.eatenAt} foods={day.foods} removeFoodItem={removeFoodItem} />
            ))}
        </div>
    )

export default Days;