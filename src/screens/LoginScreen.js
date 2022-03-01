import React, { Component } from "react";
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { usernameChanged, passwordChanged, checkIfLoggedin, loginUser } from '../actions';
import InputText from '../components/InputText'
import Button from "../components/Button";
import Sprinner from '../components/Spinner';
import './login.css'
import Spinner from "../components/Spinner";
import MeetingScreen from "./MeetingScreen";

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() {
        this.props.checkIfLoggedin();
    }

    changeUsername = (event) => {
        console.log(event);
        this.props.usernameChanged(event.target.value);
    }

    changePassword = (event) => {
        this.props.passwordChanged(event.target.value);
    }

    buttonClick = (event) => {
        console.log('Clickeeeeeeeeeeeeeeeeeeed')
        const { username, password } = this.props;
        this.props.loginUser(username, password, history);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('You clicked submit.');
      }

    renderButton = () => {
        if(this.props.loading)
            return <Spinner />
        return (
            <Button className={"w-100 btn btn-lg btn-primary"} onClick={this.buttonClick}>
                Sign in
            </Button>
        )
    }

    render() {
        if(this.props.authenticated == null) {
            return (
                <Spinner />
            )
        }
        else if(this.props.authenticated) {
            return (
                <Navigate to='/meetings' />
            );
        }
        return (
            <div className="text-center main-body">
                <main className="form-signin">
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <InputText 
                                type={"email"} 
                                className={"form-control"} 
                                placeholder={"name@example.com"} 
                                value={this.props.username}
                                onChange={this.changeUsername}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <InputText 
                                type={"password"} 
                                className={"form-control"} 
                                placeholder={"Password"}
                                value={this.props.password}
                                onChange={this.changePassword}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                {this.props.error}
                            </label>
                        </div>
                        { this.renderButton() }
                    </form>
                </main>
            </div>
        );
    }
}

const mapStateToProps = ({ login }) => {
    const { username, password, error, loading, authenticated } = login;
    return { username, password, error, loading, authenticated };
}

export default connect(mapStateToProps, { usernameChanged, passwordChanged, checkIfLoggedin, loginUser })(LoginScreen);
