import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
            return <Redirect to='/ProductInfo' />
        }
        return (
            <div className='card' >
                
                <div class="info" >
                    <h2>{this.props.products.id}.{this.props.products.StoryName}</h2>
                     <div align="left">{this.props.products.Description}</div><br />
                   
                </div>
            </div>
        );
    }
}
export default StoryCard;
