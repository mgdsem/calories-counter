import React from 'react';
import moment from 'moment';

import Button from './Button';

const FoodListItem = ({
    text,
    removeFoodItem,
    id,
    eatenAt
}) => (
        <div className="list-item">
            <li className="list-item__element">{text}</li>
            <p>{moment(eatenAt).format('DD MMM YYYY')}</p>
            <Button onClick={() => removeFoodItem(id)}>Remove</Button>
        </div>
    );

export default FoodListItem;