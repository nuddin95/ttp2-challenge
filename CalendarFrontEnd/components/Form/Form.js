import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form">
                <h1 className="form-date">April {this.props.date.day}, 2018</h1>
                <ul className="form-events-collapse">
                    {
                        this.props.date.events.map((event, ind) => {
                            return (<li className="day-events-single" key={`months-${this.props.date.day}-${ind}`}>{event}</li>)
                        })
                    }
                </ul>
                <div className="form-new">
                    <div className="form-new-button" >
                        <h1>+</h1>
                    </div>
                </div>
            </div>
        )
    }
}