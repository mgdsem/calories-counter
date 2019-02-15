import React, { Component } from 'react';

import Input from './Input';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onFoodInputChange = this.onFoodInputChange.bind(this);
        this.onCalInputChange = this.onCalInputChange.bind(this);

        this.state = {
            currentFoodInputValue: '',
            currentCalInputValue: '',
        };
    };

    onFoodInputChange(e) {
        console.log(e.target.value);

        this.setState({ currentFoodInputValue: e.target.value });
    }

    onCalInputChange(e) {
        console.log(e.target.value);

        this.setState({ currentCalInputValue: e.target.value });
    }
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
                    value={this.state.currentCalInputValue}
                    placeholder="nb of calories"
                    onChange={this.onCalInputChange}
                />

                {/* <Input
                type="date"
                id="dateInput"
                value={this.state.currentDateInputValue}
                placeholder=
                /> */}

            </div>
        );
    }
}

export default Counter;