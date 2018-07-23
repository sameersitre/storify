import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ProductInfo from './ProductInfo.js';

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
        if (this.state.productIndex !== '') {
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
            <ProductInfo value={this.state.productIndex}/>
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*******************');

            return <Redirect to='/ProductInfo' />
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
