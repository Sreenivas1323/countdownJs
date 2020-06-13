import React, { Component } from 'react';
import './App.css';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hrs: 0,
            min: 0,
            secs: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log(time);
        const secs = Math.floor((time / 1000) % 60);
        const min = Math.floor((time / 1000 / 60) % 60);
        const hrs = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({ days, hrs, min, secs });

    }

    leading0(num) {
        return num < 10 ? '0' + num : num
    }

    render() {

        return (
            <div className="">
                <div className="Clock-days">{this.leading0(this.state.days)} days</div>
                <div className="Clock-hrs">{this.leading0(this.state.hrs)} hrs</div>
                <div className="Clock-mins">{this.leading0(this.state.min)} mins</div>
                <div className="Clock-secs">{this.leading0(this.state.secs)} secs</div>
            </div>
        );
    }
}

export default Clock;