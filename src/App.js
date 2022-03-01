import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import MeetingScreen from './screens/MeetingScreen';
import SignupScreen from './screens/SignupScreen';
import TopicScreen from './screens/TopicScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route  path='/' exact element={<LoginScreen />} />
              <Route  path='/meetings' exact element={<MeetingScreen />} />
              <Route  path='/topic/:meetingId' exact element={<TopicScreen />} />
              <Route  path='/Signup' exact element={<SignupScreen />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return { login };
}

export default connect(mapStateToProps)(App);
