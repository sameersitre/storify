import React, { Component } from 'react';
import NavBar from './NavBar';
import './CreateStory.css';

class CreateStory extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="createStory">
                    Let's Create An Amazing Story
                </div>
                <div className="introText" >
                    <p>
                        Stories are a way to express our emotions, showcase our creativity while we can send our message to the world.
                        <br/>
                        Storify gives you such an oppertunity in a very interresting manner. We give you a prompt, based on the prompt you have to create a story. 
                    </p>
                </div>    
            </div>
        )
    }
}

export default CreateStory;