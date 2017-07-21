import React,{Component} from 'react';
import Product from './Product';
import {connect} from 'react-redux';

export class ProductGrid extends Component{
    renderProducts(){
        const {products} = this.props;
        return products.map((product) => (<Product key={product}/>));
    }

    render(){
        return (
            <div className="product-grid">
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        products: state.products
    };
}

export default connect(mapStateToProps)(ProductGrid);