import React from 'react';
import {mount} from 'enzyme';
import Product from '../../app/components/Product';

describe('Product Component',()=>{
    
    let ProductComponent;
    let mockProps;
    
    beforeEach(()=>{
        mockProps = {
            imgSrc: "300.png",
            title:'Product',
            description:'Shoes'
        }
        ProductComponent = mount(<Product {...mockProps}/>);
    })

    it('should exist',()=>{
        expect(Product).not.toBeUndefined();
    });

    it('should render a wrapping div',()=>{
        expect(ProductComponent.find('div')).toBeTruthy();
    });

    it('should render an img',()=>{
        expect(ProductComponent.find('img').props()).toHaveProperty('src',mockProps.imgSrc);
    });

    it('should render a title',()=>{
        expect(ProductComponent.find('h3').text()).toEqual(mockProps.title);
    });

    it('should render a description',()=>{
        expect(ProductComponent.find('span').text()).toEqual(mockProps.description);
    });
   
})