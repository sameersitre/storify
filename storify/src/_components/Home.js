import React, { Component } from 'react';
import './Home.css';
import Stories from '../_data/StoriesDB.json';

//import Card from './Card'
import StoryCard from './StoryCard';
import MediaCard from './MediaCard';
class Home extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         products: toysjson,
    //     }
    // }
    render() {
        return (
            <div>
                <h3 align="center">TOP STORY COLLABORATIONS</h3>

                <div className='hor-slide-container'  >

                    {Stories.map((game, i) => <StoryCard key={i} products={game} />)}
                </div>


            </div>
        );
    }
}



export default Home;
