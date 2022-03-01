import React, { Component } from "react";
import { checkIfLoggedin, getAllMeetingDetails } from '../actions';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Accordion from '../components/Accordion';
import { BASE_URL, MEETING_TOPICS } from '../utils/endpointUrl';

class MeetingScreen extends Component {

    constructor(props) {
        super(props)
        this.props.getAllMeetingDetails();
    }

    componentDidMount() {
        
        this.props.checkIfLoggedin();
    }

    renderMeetingList = () => {
        
        const meetings = Array.from(this.props.meetings);
        console.log(meetings)
        if(!meetings || meetings.length == 0) {
            return <h1>No Meeting found for your organization</h1>
        }
        
        console.log("Atleasssssst here");
        console.log(meetings);
        const list = meetings.map((meeting, idx) => {
            const { topic, description, id } = meeting;
            return (
                <Accordion 
                    key={idx} topic={topic} 
                    description={description} link={BASE_URL+MEETING_TOPICS+'/'+id} 
                    linkText='Topics'    
                />
            )
        });
        return list;
    }

    render() {
        if(this.props.authenticated === false)
            return <Navigate to='/' />
        {this.renderMeetingList()}
    }
}

const mapStateToProps = ({ login, meetings }) => {
    const { username, password, error, loading, authenticated } = login;
    return { username, password, error, loading, authenticated, meetings };
}

export default connect(mapStateToProps, { checkIfLoggedin, getAllMeetingDetails })(MeetingScreen);
