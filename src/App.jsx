import React, { Component } from 'react';

import Clock from './clock'
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2020',
            newDeadline: ''
        }
    }


    changeDeadline() {
        this.setState({ deadline: this.state.newDeadline });
    }
    render() {
        return (
            <div className="App">
                <div className="App-title"> CountDown to {this.state.deadline} </div>

                <Clock
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl placeholder="new date"
                        onChange={event => this.setState({ newDeadline: event.target.value })}
                    />
                    <button onClick={() => this.changeDeadline()}> Submit </button>
                    <h1>Enter any date to start Count Down!</h1>
                    <p>Example "September 27, 2020"</p>

                </Form>

            </div>

        )
    }
}

export default App;