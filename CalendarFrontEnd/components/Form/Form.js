import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            dateSearch:this.props.date.dateSearch,
            title:'',
            start:'',
            end:'',
            description:''
        }
        this.infoChange=this.infoChange.bind(this)
    }

    infoChange(e, type){
        console.log("CHANGED STATE", this.state)
        if(type=='title'){
            this.setState({title:e.target.value})
        }else if(type=='start'){
            this.setState({start:e.target.value})
        }else if(type=='end'){
            this.setState({end:e.target.value})
        }else if(type=='description'){
            this.setState({description:e.target.value})
        }
        console.log("CHANGED STATE", this.state)
    }

    render(){
        return (
            <div className="form">
                <div className="form-header">
                    <h1 className="form-header-date">April {this.props.date.dateInfo.day}, {this.props.date.dateInfo.year}</h1>
                    <div className="form-header-back" onClick={this.props.back}><h2>home</h2> </div>
                </div>
                <div className="form-events">
                    <div className="form-events-info">
                        <h3 className="form-events-list-today">New Event</h3>
                        <div className="form-events-info-fields">
                            <h4>Title</h4>
                            <input type="text" onChange={(e)=>this.infoChange(e, 'title')} />
                            <div className="form-events-info-fields-time">
                                <div className="form-events-info-fields-time-start">
                                    <h4>Start</h4>
                                    <input type="time" onChange={(e)=>this.infoChange(e, 'start')} />
                                </div>
                                <div className="form-events-info-fields-time-end">
                                    <h4>End</h4>
                                    <input type="time" onChange={(e)=>this.infoChange(e, 'end')} />
                                </div>
                            </div>
                            <h4>Description</h4>
                            <textarea rows="6" onChange={(e)=>this.infoChange(e, 'description')} />
                            <button type="button">Click Me!</button>
                        </div>
                    </div>

                    <ul className="form-events-list">
                        <h3 className="form-events-list-today">Date Events</h3>
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