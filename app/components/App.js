import React,{Component} from 'react';
import {Route} from 'react-router';
import ProductGrid from './ProductGrid';
import SingleProduct from './SingleProduct';

export default class App extends Component{
    render(){
        return(
            <div>
                <h1>App!</h1>
                <Route path="/" component={ProductGrid}/>
                <Route path="/product/:productId" component={SingleProduct}/>
            </div>
        );
    }
}

