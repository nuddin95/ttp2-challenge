import React, { Component } from 'react';
import './Month.css';
import axios from 'axios';
import Day from '../Day/Day';
import Form from '../Form/Form'

export default class Month extends Component {
    constructor(props){
        super(props);
        this.state = {
            form:{},
            formVisible:false,
        }
        this.clickDay = this.clickDay.bind(this);
    }

    clickDay(dateInfo, events){
        this.setState({form:{dateInfo, events}, formVisible:!this.state.formVisible})
    }

    render(){
        let {days} = this.props; 
        return (
            <div className="month">
                {
                    (this.state.formVisible) ? 
                    <Form date={this.state.form} back={this.clickDay}/> :
                    this.props.days && (Object.keys(days)).map((day, ind) => {
                        return (<Day key={`day-${ind}`} date={{day, 'month':'04', 'year':2018}} clickFunction={this.clickDay} />)
                    })
                }
            </div>
        )
    }
}