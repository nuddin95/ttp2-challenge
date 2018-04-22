import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form">
                <div className="form-header">
                    <h1 className="form-header-date">April {this.props.date.dateInfo.day}, {this.props.date.dateInfo.year}</h1>
                    <div className="form-header-back" onClick={this.props.back}><h3>BACK</h3> </div>
                </div>
                <div className="form-events">
                    <ul className="form-events-list">
                        {
                            (this.props.date.events.length > 0) && this.props.date.events.map((event, ind) => {
                                return (<li className="day-events-single" key={`months-${this.props.date.dateInfo.day}-${ind}`}>
                                            <h4>{event.title}</h4>
                                            <h5>Start: {event.start}</h5>
                                            <h5>End: {event.end}</h5>
                                            <h5>{event.description}</h5>
                                        </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}