import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            dateSearch:this.props.date.dateSearch,
            title:'s',
            start:'',
            end:'',
            description:''
        }
        this.infoChange=this.infoChange.bind(this);
        this.validateTime = this.validateTime.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
        this.convertFormat=this.convertFormat.bind(this);
    }

    //function to convert from 24-hour to 12-hour format
    convertFormat(time, type){
        if(type=='AM'){
            if((time.slice(0,2)*1) == 0){
                return '12'+time.slice(2);
            }else{
                return time;
            }
        }else if(type=='PM'){
            if((time.slice(0, 2)*1) > 12){
                let tString = ((time.slice(0, 2)*1) - 12)+'';
                return tString+time.slice(2);
            }else{
                return time;
            }
        }
    }

    //function to submit event
    submitEvent(){
        if(!this.state.title.length){
            alert("EVENT MUST HAVE A TITLE");
        }else if(!(this.validateTime(this.state.start, this.state.end))){
            alert("THE CURRENT START AND END TIME ARE NOT POSSIBLE");
        }else{
            axios.post('api/events/', {
                title:this.state.title,
                description:this.state.description,
                start:(this.state.start.slice(0,2)*1) > 11 ? this.convertFormat(this.state.start, "PM") + " PM":this.convertFormat(this.state.start, "AM")+" AM",
                end:(this.state.end.slice(0,2)*1) > 11 ? this.convertFormat(this.state.end, "PM") + " PM":this.convertFormat(this.state.end, "AM")+" AM",
                date:this.state.dateSearch
            })
            .then((createdEvent)=>{
                this.props.back()
            })
        }
    }

    //function to check if start and end time are valid
    validateTime(start, end){
        if(start.length && end.length){
            let startMin = ((start.slice(0, 2)*1)*60) + (start.slice(3)*1);
            let endMin = ((end.slice(0, 2)*1)*60) + (end.slice(3)*1);
            if(endMin < startMin){
                return false
            }
        }else{
            return false
        }

    return true;

    }

    infoChange(e, type){
        if(type=='title'){
            this.setState({title:e.target.value})
        }else if(type=='start'){
            this.setState({start:e.target.value})
        }else if(type=='end'){
            this.setState({end:e.target.value})
        }else if(type=='description'){
            this.setState({description:e.target.value})
        }
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
                            <button type="submit" onClick={this.submitEvent} >CREATE EVENT</button>
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