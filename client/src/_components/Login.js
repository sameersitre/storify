import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core/';
import './Login.css';
import {Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';
import LoginButton from '../uielements/button'


const LoginInput = styled(Input)`
    input{
        text-align: center;
    } 
`;

class Login extends Component {
    render() {
        return (
            <div className='input' >
                <p className="loginText"> Login Into Storify and Get Mesmarised</p>
                <div  >
                    <LoginInput placeholder="Username" className="custom"/>
                </div>
                <div>
                    <LoginInput placeholder="Password" className="inputSpace" type="password" />
                </div>
                <div className="inputSpace">
                    <Link to="/Home">
                        <LoginButton color="primary" variant="contained" >Sign In</LoginButton>
                    </Link>
                    <div className="newSignUp">
                        <p className="text-signup">New To Storify</p>
                        <Link exact="true" to="/Signup">
                            <Button color="secondary" variant="outlined">Create Your Storify Account</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;