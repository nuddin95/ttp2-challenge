import React, { Component } from 'react';
import './Month.css';
import Day from '../Day/Day';

const days=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

export default class Month extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let {days} = this.props; 
        return (
            <div className="month">
                {
                    this.props.days && (Object.keys(days)).map((day, ind) => {
                        return (<Day key={`day-${ind}`} number={day} dayName={days[day]} events={['Test', 'Test2']}/>)
                    })
                }
            </div>
        )
    }
}