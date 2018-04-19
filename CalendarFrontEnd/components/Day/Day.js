import React, { Component } from 'react';
import './Day.css';

const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:['Test', 'Test2', 'Test3']
        }
    }

    render(){
        return (
            <div className="day" onClick={()=>{(this.props.clickFunction)(this.props.number, this.state.events)}} >
                <h4 className="day-number">{this.props.number}</h4>
                <ul className="day-events">
                    {
                        this.state.events.map((event, ind) => {
                            return (<li className="day-events-single" key={`months-${this.props.number}-${ind}`}>{event}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}