import React, { Component } from 'react';
import Nav from './Nav/Nav';
import './index.css';

export default class Main extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div id="main">
                <Nav />
            </div>
        )
    }
}