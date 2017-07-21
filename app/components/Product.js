import React,{Component} from 'react';

export default class Product extends Component{
    render(){
        const {imgSrc,title,description} = this.props;
        return (
            <div className="product">
                <img src={imgSrc}/>
                <h3>{title}</h3>
                <span>{description}</span>
                <button>Add to cart</button>
            </div>
        )
    }
}