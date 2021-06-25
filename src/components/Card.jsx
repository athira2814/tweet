import React from "react";

function Card() {
  return (
    <>
      <div className="shadow">
        <input name="name" placeholder="Name" />
          <textarea
            maxLength="200"
            className="form-floating"
            placeholder="What's in your mind...."
            rows="3"
          ></textarea>
        <button type="button" className="tweet-btn">
          Tweet
        </button>
      </div>
    </>
  );
}

export default Card;
