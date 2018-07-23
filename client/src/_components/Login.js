import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core/';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='input' >
                <p className="loginText"> Login Into Storify and get mesmarised</p>
                <div  >
                    <Input placeholder="Username" />
                </div>
                <div>
                    <Input placeholder="Password" className="inputSpace" type="password" />
                </div>
                <div className="inputSpace">
                    <Link to="/Home">
                        <Button color="primary" variant="contained" >Sign In</Button>
                    </Link>
                    <div className="newSignUp">
                        <p className="text-signup">New To Storify</p>
                        <Link to="/Signup">
                            <Button color="secondary" variant="outlined">Create Your Storify Account</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;