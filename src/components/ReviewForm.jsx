import React, { useState } from "react";
import Stars from "./Stars.jsx";



function ReviewForm () {

    const [userName, setUserName] = useState(" ");
    const [body, setBody] = useState(" ");

    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }

    function handleBodyChange(e) {
        setBody(e.target.value);
    }

    function handleReset() {
        setUserName('');
        setBody('');
    }




    return (
        <div className="review-form">
            <form onSubmit={e => e.preventDefault()}>
                <p className="rating-header">Rate this movie</p>
                <h1 className="review-stars"><Stars/></h1>
                <div>
                    <div className="form-username">
                        <label className="form-usernameLabel">Username:</label>
                        <input 
                            className="input-fields" 
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                    </div>
                    <div className="form-content">
                        <label className="form-reviewBodyLabel">Write your review here:</label>
                        <input
                        className="input-fields"
                        id="bodyInput"
                        value={body}
                        onChange={handleBodyChange}
                        />
                    </div>
                </div>
                <div className="btn-container">
                    <button className="submit-btn" onClick={handleReset}>Submit</button>

                </div>
            </form>


        </div>
    );
}

export default ReviewForm;