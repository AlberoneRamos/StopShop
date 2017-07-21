import React from 'react';

import {SingleProduct} from '../../app/components/SingleProduct';
import {mount} from 'enzyme';

describe('SingleProduct Component', () => {
    let SingleProductComponent;
    let mockProps;
    let mockComments;

    beforeEach(() => {
        mockProps = {
            imgSrc: "300.png",
            title:'Product',
            description:'Shoes'
        }
        mockComments = [{
                id: '1',
                comment: 'test',
                user: 'Ash'
            },
            {
                id: '2',
                comment: 'test',
                user: 'Ash'
            },
            {
                id: '3',
                comment: 'test',
                user: 'Ash'
            }
        ];

        SingleProductComponent = mount(<SingleProduct {...mockProps} comments={mockComments}/>);
    })

    it('should exist', () => {
        expect(SingleProductComponent).not.toBeUndefined();
    })

    it('should render a wrapper div with .single-product class', () => {
        const productNode = SingleProductComponent.find('div.single-product');
        expect(productNode.length).toEqual(1);
    });

    it('should render an image node with .product-image class', () => {
        const imageNode = SingleProductComponent.find('img.product-image');
        expect(imageNode.length).toEqual(1);
        expect(imageNode.props()).toHaveProperty('src',mockProps.imgSrc);
    });

    it('should render title',()=>{
        expect(SingleProductComponent.find('h2').text()).toEqual(mockProps.title);
    });

    it('should render description',()=>{
        expect(SingleProductComponent.find('p.product-description').text()).toEqual(mockProps.description);
    });

    it('should render a Div node with .comment class for each comment',()=>{
        const commentNodes = SingleProductComponent.find('div.comment');
        expect(commentNodes.length).toEqual(mockComments.length);
    });

})