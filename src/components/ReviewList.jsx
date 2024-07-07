import React from "react";
import Review from "./Review";



export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            content: props.content,
            count: 0
        };
    }

    render() {


        let reviews = [];
        if (this.state.reviews) {
            for (let review of this.state.reviews) {
                reviews.push(<Review {...review} />)
            }
        }

       return(
        <div className="review-list">
            <div className="user-reviews">{this.state.content}</div>
            <div>
                {reviews} 
            </div>
        </div>
       )
    };
}
