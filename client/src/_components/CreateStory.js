import React, { Component } from 'react';
import NavBar from './NavBar';
import './CreateStory.css';
import { Button } from '../../node_modules/@material-ui/core';
import { Link } from 'react-router-dom'
class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptNotClicked: true,
            getPrompt: false,
            newpromptClicked: false,
            createStoryClicked: false
        }
    }
    promptClick = () => {
        //let value = false;
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        this.setState({
            promptNotClicked: !this.state.promptNotClicked,
            getPrompt: !this.state.getPrompt

        })
    }
    render() {
        let promptvalue = this.state.promptNotClicked;

        return (
            <div>
                <NavBar />
                <div className="createStory">
                    Let's Create An Amazing Story
                </div>
                <div className="introText" >
                    <p>
                        Stories are a way to express our emotions, showcase our creativity while we can send our message to the world.
                        <br />
                        Storify gives you such an oppertunity in a very interresting manner. We give you a prompt, based on the prompt you have to create a story.
                    </p>
                    {promptvalue &&
                        <div className="prompt">
                            <p style={{ fontSize: "15px" }}> Click below to get a prompt </p>
                            <Button color="primary" variant="contained" onClick={this.promptClick}> Prompt </Button>
                        </div>
                    }


                    { this.state.getPrompt &&
                        <div className="promptCard">
                            abcdefghijklmnopqrstuvwxyz
            <div className="promptButtons">
                                <Button color="secondary" variant="outlined" style={{ float: "left" }} onClick={this.promptClick}> New Prompt</Button>
                                
                                <Button color="secondary" variant="raised" style={{ float: "right" }} onClick={this.createStoryClick}>Create Story</Button>
                               
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


export default CreateStory;