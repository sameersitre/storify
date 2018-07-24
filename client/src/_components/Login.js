import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core/';
import './Login.css';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';

const LoginInput = styled(Input)`
    input{
        text-align: center;
    } 
`;
const LoginButton = styled(Button)`
    &&.MuiButton-containedPrimary-24{
      background-color: #2aa20c;
      ;  
    }
    } 
`;

class Login extends Component {
    render() {
        return (
            <div className='input' >
                <p className="loginText"> Login Into Storify and Get Mesmarised</p>
                <div  >
                    <LoginInput placeholder="Username" className="custom" />
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
                            <Button style={{color:" #d82e07"}} variant="outlined">Create Your Storify Account</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;