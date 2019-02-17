import React, { Component } from 'react';
import moment from 'moment';
import uuid from 'uuid/v1';

import Input from './Input';
import Button from './Button';
import FoodsList from './FoodsList';


class Counter extends Component {
    constructor(props) {
        super(props);

        this.onFoodInputChange = this.onFoodInputChange.bind(this);
        this.onCalInputChange = this.onCalInputChange.bind(this);
        this.onAddFoodItem = this.onAddFoodItem.bind(this);
        this.onRemoveFoodItem = this.onRemoveFoodItem.bind(this);

        this.state = {
            currentFoodInputValue: '',
            currentCaloriesInputValue: '',
            foods: []
        };
    };

    componentDidMount() {
        if (localStorage) {
            const savedFoods = localStorage.getItem('foods');
            const parsedFoods = JSON.parse(savedFoods);

            if (parsedFoods) {
                this.setState({ foods: parsedFoods });
            }
        }
    }

    onFoodInputChange(e) {
        this.setState({ currentFoodInputValue: e.target.value });
    }

    onCalInputChange(e) {
        this.setState({ currentCaloriesInputValue: e.target.value });
    }

    onAddFoodItem() {
        const newFoodItem = {
            text: `${this.state.currentFoodInputValue} - ${this.state.currentCaloriesInputValue}`,
            id: uuid(),
            createdAt: moment(),
        }

        this.setState(prevState => {
            const newFoods = [...prevState.foods, newFoodItem];
            const parsedFoods = JSON.stringify(newFoods);

            if (localStorage) {
                localStorage.setItem('foods', parsedFoods);
            };

            return {
                foods: newFoods,
                currentFoodInputValue: '',
                currentCaloriesInputValue: ''
            };
        });
    };

    onRemoveFoodItem(id) {
        this.setState(prevState => {
            const newFoods = prevState.foods.filter(food => id !== food.id);

            const parsedFoods = JSON.stringify(newFoods);

            if (localStorage) {
                localStorage.setItem('foods', parsedFoods);
            }

            return {
                foods: newFoods
            };
        });
    };

    render() {
        return (
            <div className="counter">
                <Input
                    type="text"
                    id="foodInput"
                    value={this.state.currentFoodInputValue}
                    placeholder="Tell me what U have just eaten man"
                    onChange={this.onFoodInputChange}
                />

                <Input
                    type="number"
                    id="calInput"
                    value={this.state.currentCaloriesInputValue}
                    placeholder="nb of calories"
                    onChange={this.onCalInputChange}
                />

                <Button onClick={this.onAddFoodItem}>Add</Button>

                <FoodsList foods={this.state.foods} removeFoodItem={this.onRemoveFoodItem} />
            </div>
        );
    }
}

export default Counter;