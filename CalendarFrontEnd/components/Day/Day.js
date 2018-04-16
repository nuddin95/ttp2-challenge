import React, { Component } from 'react';
import './Day.css';

const days=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

export default class Day extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="day">
                <h4 className="day-name">{days[this.props.day]}</h4>
                <h5 className="day-number">{this.props.number}</h5>
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