import React, { Component } from 'react';
import './Day.css';
import axios from 'axios';

const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:[]
        }
    }

    componentDidMount(){
        console.log("DATE FOR GET REQUEST", `${this.props.date.year}-${this.props.date.month}-${this.props.date.day}`)
        axios.get(`/api/events/${this.props.date.year}-${this.props.date.month}-${this.props.date.day}`)
        .then(events=>{
            this.setState({events})
        })
    }

    render(){
        return (
            <div className="day" onClick={()=>{(this.props.clickFunction)(this.props.date.day, this.state.events)}} >
                <h4 className="day-date">{this.props.date.day}</h4>
                <ul className="day-events">
                    {
                        (this.state.events.length > 0) && this.state.events.map((event, ind) => {
                            return (<li className="day-events-single" key={`months-${this.props.date.day}-${ind}`}>{event}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}