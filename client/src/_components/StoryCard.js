import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
//import ProductInfo from './ProductInfo.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  demo:{
      color:"red"
  }
});

class StoryCard extends Component {
    constructor() {
        super();
        this.state = {
            productIndex: '',
            productImageName: '',
            clickedProductDescription:'',
        }
    }
    cardClick = (id, imgname, e) => {
        this.setState({ productIndex: id });
        this.setState({ productImageName: imgname })
        alert(id +" "+imgname+ " card clicked");
    }

    btnImageClick(event) {
    }

    render() {
        const { classes } = this.props;
    const { spacing } = this.state;
        if (this.state.productIndex !== '') {
           {/* console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
            <ProductInfo value={this.state.productIndex}/>
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*******************');*/}

            return <Redirect to='/ViewStory' />
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&######################');

        }
        return (
            <div className='card' onClick={(e) =>
                this.cardClick(this.props.products.id, this.props.products.ImageAddress, e)} >
                
                <div className="info" >
                    <h2>{this.props.products.id}.{this.props.products.StoryName}</h2>
                     <div align="left">{this.props.products.Description}</div><br />
                   
                </div>
                <Button size="small" color="primary">
            Learn More
          </Button>


          
            </div>
        );
    }
}
export default StoryCard;
