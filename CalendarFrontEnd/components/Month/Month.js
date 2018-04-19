import React, { Component } from 'react';
import './Month.css';
import Day from '../Day/Day';
import Form from '../Form/Form'

const days=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

export default class Month extends Component {
    constructor(props){
        super(props);
        this.state = {
            form:{}
        }
        this.clickDay = this.clickDay.bind(this);
    }

    clickDay(day, events){
        this.setState({form:{day, events}})
    }

    render(){
        let {days} = this.props; 
        return (
            <div className="month">
                {
                    (Object.keys(this.state.form).length) ? 
                    <Form date={this.state.form}/> :
                    this.props.days && (Object.keys(days)).map((day, ind) => {
                        return (<Day key={`day-${ind}`} number={day} clickFunction={this.clickDay} />)
                    })
                }
            </div>
        )
    }
}