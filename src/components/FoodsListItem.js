import React from 'react';

import Button from './Button';

const FoodListItem = ({
    text,
    removeFoodItem,
    id
}) => (
        <div>
            <li>{text}</li>
            <Button onClick={() => removeFoodItem(id)}>Remove</Button>
        </div>
    );

export default FoodListItem;