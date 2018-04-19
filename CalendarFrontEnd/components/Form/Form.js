import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form">
                <h1>{this.props.date.day}</h1>
            </div>
        )
    }
}