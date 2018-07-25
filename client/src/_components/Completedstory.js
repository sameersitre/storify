import React, { Component } from 'react';
import './CompletedStory.css';
import Avatar from '@material-ui/core/Avatar';
/* hardcoding img link, taking it from local*/
import friends from '../friends.jpg'
import NavBar from './NavBar';
class CompletedStory extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='storycard'>
                    Welcome to Storify.com
            <div className="avatarDiv">
                        <Avatar src={friends} alt="nothing" />
                    </div>
                </div>
            </div>
        )
    }
}

export default CompletedStory;
