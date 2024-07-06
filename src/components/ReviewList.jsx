import React from 'react';
import Review from './Review.';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <Review key={index} text={review} />
      ))}
    </div>
  );
};

export default ReviewList;
