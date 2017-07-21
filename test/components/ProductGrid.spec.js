import React from 'react';
import {ProductGrid} from '../../app/components/ProductGrid';
import Product from '../../app/components/Product';
import {mount} from 'enzyme';


describe('ProductGrid Component',()=>{
    let ProductGridComponent;
    let mockProps;
    beforeEach(()=>{
        mockProps = {
            products:[1,2,3,4,5]
        }
        ProductGridComponent = mount(<ProductGrid {...mockProps}/>);

    });

    it('should exist',()=>{
        expect(ProductGrid).not.toBeUndefined();
    });

    it('should render a wrapper div with .product-grid class',()=>{
        expect(ProductGridComponent.find('div.product-grid')).toBeTruthy();
    });

    it('should have products as props',()=>{
        expect(ProductGridComponent.props().products).not.toBeUndefined();
    });

    it('should render one Product for each element in products array',()=>{
        const products = ProductGridComponent.find('div.product');
        expect(products.length).toEqual(mockProps.products.length);
    });
})