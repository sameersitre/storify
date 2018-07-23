import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core/';
import './Signup.css';
import { Link } from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <div className="signUp">
                <div className="signUp" style={{ display: "inline" }}>
                    <p style={{ display: "inline" }}> Name :   </p>
                    <Input placeholder="First Name" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Input placeholder="Last Name" />
                </div>
                <div className="signUp">
                    <p style={{ display: "inline" }}> Mail Address:   </p>
                    <Input placeholder="Enter your mail id" />
                </div>
                <div className="signUp">
                    <p style={{ display: "inline" }}> Password :   </p>
                    <Input placeholder="Create password" type="password" />
                    <br /><br />
                    <p style={{ display: "inline" }}> Confirm :   </p>
                    <Input placeholder="Confirm Password" type="password" />
                </div>
                <div className="signUp">
                    <Link to="/Login">
                        <Button color="secondary" variant="contained">Create My Storify Account</Button>
                    </Link>
                </div>
                <p className="gotoLogin">Already Have an Account?<Link to="/Login" style={{ color: "blue" }}>Signin</Link></p>

            </div>
        )
    }
}

export default Signup;