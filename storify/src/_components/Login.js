import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core/';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className='input'>
                <p className="loginText"> Login Into Storify and be mesmarised</p>
                <div  >
                    <Input placeholder="Username" />
                </div>
                <div>
                    <Input placeholder="Password" className="inputSpace"/>
                </div>
                <div className="inputSpace">
                    <Button color="primary" variant="contained" >Sign In</Button>
                    <br/><br/>
                    <Button color="secondary" variant="outlined">New to Storify, Sign Up</Button>
                </div>
            </div>
        )
    }
}
export default Login;