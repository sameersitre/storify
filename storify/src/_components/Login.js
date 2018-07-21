import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core/';

class Login extends Component {
    render() {
        return (
            <div>
                <p> Login Into Storify and be mesmarised</p>
                <div style={{ display: 'grid' }}>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button color="green" variant="contained">Submit</Button>
                </div>
            </div>
        )
    }
}
export default Login;