import React,{Component} from 'react';

export class SingleProduct extends Component{
    renderComments(){
        const {comments} = this.props;
        return comments.map(comment => 
            <div className="comment" key={comment.id}>
                <h3>comment.user</h3>
                <p>comment.comment</p>
            </div>
        )
    }

    render(){
        const {imgSrc,title,description} = this.props;
        return (
            <div className="single-product">
                <div className="product-information">
                    <img src={imgSrc} className="product-image"/>
                    <h2 className="product-title">{title}</h2>
                    <p className="product-description">{description}</p>
                </div>
                <div className="comments">
                    {this.renderComments()}
                </div>
            </div>
        )
    }
}