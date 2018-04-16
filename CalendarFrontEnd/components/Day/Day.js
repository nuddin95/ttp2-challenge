import React, { Component } from 'react';
import './Day.css';

const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default class Day extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="day">
                <h4 className="day-number">{this.props.number}</h4>
                <ul className="day-events">
                    {
                        this.props.events.map((event, ind) => {
                            return (<li key={`months-${this.props.number}-${ind}`}>{event}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}