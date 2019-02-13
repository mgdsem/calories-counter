import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: moment().format("HH:mm:ss"),
        }
        this.getCurrentTime = this.getCurrentTime.bind(this)
    }
    componentDidMount() {
        this.getCurrentTime();
        setInterval(this.getCurrentTime, 1000);
    }

    getCurrentTime() {
        this.setState({ currentTime: moment().format("HH:mm:ss") })
    }

    render() {
        return (
            <div className="time">
                <p>{moment().format("MMM Do YY")}</p>
                <p>{this.state.currentTime}</p>
            </div>
        )
    }
}


export default Time;


