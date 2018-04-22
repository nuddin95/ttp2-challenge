import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props);
        console.log("PROPS", this.props.date)
    }

    render(){
        return (
            <div className="form">
                <h1 className="form-date">April {this.props.date.day}, 2018</h1>
                <ul className="form-events">
                    {
                        (this.props.date.events.length > 0) && this.props.date.events.map((event, ind) => {
                            return (<li className="day-events-single" key={`months-${this.props.date.day}-${ind}`}>
                                        {event.title+'\n'+event.description}
                                    </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}