import React, { Component } from 'react';
import './Nav.css';

const daysOfWeek=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default class Nav extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div id="nav">
                <h1 id="title">April Calendar</h1>
                <div id="nav-days">
                    {
                        //maps through days to display them on top of calendar
                        daysOfWeek.map((day, ind)=> {
                            return (<h3 className="nav-days-day" key={`${day}-${ind}`}>{day}</h3>)
                        })
                    }
                </div>
            </div>
        )
    }
}