import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import transitions from '../../node_modules/@material-ui/core/styles/transitions';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from   '@material-ui/core/Tooltip';

import './StoryCard.css';
import Users from '../_data/Users.json'
class StoryCard extends Component {
    constructor() {
        super();
        this.state = {
            productIndex: '',
            productImageName: '',
            clickedProductDescription: '',
            userimage: Users,
        }
    }
    cardClick = (id, imgname, e) => {
        this.setState({ productIndex: id });
        this.setState({ productImageName: imgname })
        alert(id + " " + imgname + " card clicked");
    }
    btnImageClick(event) {
    }
    cardStyle = {
        padding: '0px 10px 10px 10px',
        margin: '20px',
        boxShadow: '0px 1px 20px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
        borderRadius: '5px',
        trans: { boxShadow: '3s' }
    }

    render() {

        if (this.state.productIndex !== '') {
            {/* console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
            <ProductInfo value={this.state.productIndex}/>
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*******************');*/}

            return <Redirect to='/ViewStory' />
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&######################');
        }
        return (
            <div  style={this.cardStyle}
                onClick={(e) =>
                    this.cardClick(this.props.products.id, this.props.products.ImageAddress, e)} >
                <div className="info"  >
                    <h2>{this.props.products.StoryName}</h2>
                    <div  align="left">{this.props.products.Description}</div><br />

                </div>

                <div  >
                    {/* {console.log(this.props.products.Users)} */}
                    {this.props.products.Users ? this.props.products.Users.map((image0, i) =>
                         <Tooltip title={image0.ImageAddress.slice(0, -5)} >
                         <Avatar style={{display:"inline-block",float:"right"}} src={require('../photos/' + image0.ImageAddress)} alt="nothing" /> 
                         </Tooltip> )  : ''}
                </div>
                <Button size="small" color="primary">
                    Read
          </Button>

            </div>
        );
    }
}
export default StoryCard;
