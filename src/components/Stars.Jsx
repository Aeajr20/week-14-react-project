import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, i) => (
        <span key={i} onClick={() => setRating(i + 1)}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Stars;
