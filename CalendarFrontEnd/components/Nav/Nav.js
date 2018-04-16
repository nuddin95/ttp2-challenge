import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div id="nav">
                <h1 id="title">Calendar</h1>
            </div>
        )
    }
}