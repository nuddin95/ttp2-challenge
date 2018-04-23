import React, { Component } from 'react';
import './Day.css';
import axios from 'axios';

const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:this.props.events || [],
            dateSearch:`${this.props.date.year}-${this.props.date.month}-${(this.props.date.day < 10) ? ('0'+this.props.date.day):this.props.date.day}`
        }
    }

    componentDidMount(){
        //gets the YYYY-MM-DD format
        let searchDate = `${this.props.date.year}-${this.props.date.month}-${(this.props.date.day < 10) ? ('0'+this.props.date.day):this.props.date.day}`;
        axios.get(`/api/events/${searchDate}`)
        .then(events=>{
            this.setState({events:events.data})
        })
    }

    render(){
        return (
            <div className="day" onClick={()=>{(this.props.clickFunction)(this.props.date, this.state.events, this.state.dateSearch)}} >
                <h4 className="day-date">{this.props.date.day}</h4>
                <ul className="day-events">
                    {
                        (this.state.events.length > 0) && this.state.events.map((event, ind) => {
                            return (<li className="day-events-single" key={`months-${this.props.date.day}-${ind}`}>
                                        <h5>{event.title}</h5>
                                    </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}