import React, { Component } from 'react';
import './index.css';
import Nav from './Nav/Nav';
import Month from './Month/Month';

const april={1:0, 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:6, 15:0, 16:1, 17:2, 18:3, 19:4, 20:5, 21:6, 22:0, 23:1, 24:2, 25:3, 26:4, 27:5, 28:6, 29:0, 30:1};

export default class Main extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div id="main">
                <Nav />
                <Month days={april} />
            </div>
        )
    }
}