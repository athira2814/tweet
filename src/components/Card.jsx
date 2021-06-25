import React from "react";

function Card() {
    return (
            
        <div className="contain">
            <div className="name">
                <input name="name" placeholder="Name"/>
            </div>
            <div className="form-floating">
                <textarea maxLength="200" className="form-control" placeholder="What's in your mind...."   ></textarea>
            </div>
            <div className="btn">
                <button type="button" className="tweet-btn">Tweet</button>
            </div>
        </div>


            
    );
}

export default Card;
