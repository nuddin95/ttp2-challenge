import React, { Component } from 'react';
import './index.css';
import Nav from './Nav/Nav';
import Day from './Day/Day';

export default class Main extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div id="main">
                <Nav />
                <Day day={1} number={2} events={['hi', 'bye', 'again']}/>
            </div>
        )
    }
}