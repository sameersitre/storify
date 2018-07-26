import React, { Component } from 'react';
import NavBar from './NavBar';
import './CreateStory.css';
import { Button } from '../../node_modules/@material-ui/core';
import { Link } from 'react-router-dom';
import WriteStory from './WriteStory';

const prompt = ["fdcgtfcdtgfc", "gfcgyhfcghfcvgh", "hgfchfchcvhcv", "hgcvhgcvhgvc"];
class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptNotClicked: true,
            getPrompt: false,
            /*newpromptClicked: false,
            createStoryClicked: false*/
            character:{
                Sampth:"Sampath:Backend Guy",
                Harish:"Harish:FrontEnd Guy",
                Sameer:"Sameer:FrontEnd Guy"
            }
        }
    }
    updatePrompt = () => {
        const newPrompt = "ran";
        this.setState({
            character: {...this.state.character, Sameer:newPrompt} 
        })

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
                            <Button style={{backgroundColor:"#bb481bb8",color:"white"}} variant="contained" onClick={this.promptClick}> Prompt </Button>
                        </div>
                    }
   

                    {this.state.getPrompt &&
                        <div className="promptCard">
                        <p>{this.state.character.Sameer}</p>
                            <div className="promptButtons">
                                <Button style={{color:"#f30d0dd9",float:"left"}} variant="flat" onClick={this.updatePrompt}> New Prompt</Button>
                                <Link to="/WriteStory">
                                    <Button style={{ backgroundColor: "rgba(210, 160, 63, 3)", color: "white",float:"right" }} variant="raised"  onClick={this.createStoryClick}>Create Story</Button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


export default CreateStory;