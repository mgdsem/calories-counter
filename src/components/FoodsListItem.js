import React from 'react';

import Button from './Button';

const FoodListItem = ({
    text,
    removeFoodItem,
    id
}) => (
        <div className="list-item">
            <li className="list-item__element">{text}</li>
            <Button onClick={() => removeFoodItem(id)}>Remove</Button>
        </div>
    );

export default FoodListItem;