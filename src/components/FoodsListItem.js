import React from 'react';

import Button from './Button';

const FoodListItem = (props) => (
    <div>
        <li>{props.text}</li>
        <Button onClick={() => props.removeFoodItem(props.id)}>Remove</Button>

    </div>
);

export default FoodListItem;