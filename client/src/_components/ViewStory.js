import React, { Component } from 'react';
import './ViewStory.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

class ViewStory extends Component {

    cardStyle={
        margin: '100px 250px 100px 250px',
         height:'900px',
         padding:'30px'
    }
    render() {
        return (
            <Grid >
                <Card style={this.cardStyle}> this is a story page</Card>


            </Grid>
        );
    }
};
export default ViewStory;