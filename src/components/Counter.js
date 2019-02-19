import React, { Component } from 'react';
import moment from 'moment';
import { uniq } from 'lodash';
import uuid from 'uuid/v1';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Input from './Input';
import Button from './Button';
import Days from './Days';


class Counter extends Component {
    constructor(props) {
        super(props);

        this.onFoodInputChange = this.onFoodInputChange.bind(this);
        this.onCalInputChange = this.onCalInputChange.bind(this);
        this.onAddFoodItem = this.onAddFoodItem.bind(this);
        this.onRemoveFoodItem = this.onRemoveFoodItem.bind(this);
        this.onDateInputChange = this.onDateInputChange.bind(this);

        this.state = {
            currentFoodInputValue: '',
            currentCaloriesInputValue: '',
            currentDateValue: new Date(),
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

    onDateInputChange(date) {
        this.setState({ currentDateValue: date });
    }

    onAddFoodItem() {
        const newFoodItem = {
            text: `${this.state.currentFoodInputValue} - ${this.state.currentCaloriesInputValue} kcal`,
            calories: this.state.currentCaloriesInputValue,
            id: uuid(),
            eatenAt: this.state.currentDateValue,
            createdAt: new Date()
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
        // console.log(this.state);

        // WAZNE!! (najpierw przygotowujemy dane, a potem na ich podstawie wyswietlamy je na ekranie):

        const days = this.state.foods.map((food) => moment(food.eatenAt).format('DD MMM YYYY'));
        const uniqDays = uniq(days);
        const preparedDays = uniqDays.map((day) => ({
            eatenAt: day,
            foods: this.state.foods.filter((food) => moment(food.eatenAt).format('DD MMM YYYY') === day)
        }))
        console.log(uniqDays);
        console.log(preparedDays);

        return (
            <div className="counter">
                <div className="counter__form">
                    <div className="counter__input">
                        <Input
                            type="text"
                            id="foodInput"
                            value={this.state.currentFoodInputValue}
                            placeholder="Tell me what U have just eaten man"
                            onChange={this.onFoodInputChange}
                        />
                    </div>

                    <div className="counter__input">
                        <Input
                            type="number"
                            id="calInput"
                            value={this.state.currentCaloriesInputValue}
                            placeholder="nb of calories"
                            onChange={this.onCalInputChange}
                        />
                    </div>

                    <div className="counter__input">
                        <DatePicker
                            selected={this.state.currentDateValue}
                            onChange={this.onDateInputChange}
                        />
                    </div>

                    <Button onClick={this.onAddFoodItem}>Add</Button>
                </div>

                <Days preparedDays={preparedDays} removeFoodItem={this.onRemoveFoodItem} />

                <p>
                    {`${this.state.foods.reduce((acc, currentValue) => Number(acc) + Number(currentValue.calories), 0)} kcal`}
                </p>
            </div>
        );
    }
}

export default Counter;