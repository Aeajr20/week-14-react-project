import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

 

function StarRating () {
    const [rating, setRating] = useState("");
    const [hover, setHover] = useState("");


 
 function handleStarChange(e) {
    setRating(e.target.value);
}
 
 return (
        <div className="star-ratings">
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <div key={i}>
                        <input 
                            type="radio" 
                            className="radio-star-btn" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => handleStarChange} 
                        />
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#F3D511" : "E7DFDF"} 
                            size="30" 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover (null)}
                            />
                    </div>
                );
            })}
        </div>
    )
}
export default StarRating;


