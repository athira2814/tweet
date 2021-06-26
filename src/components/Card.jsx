import React , { useState } from "react";

function Card() {
  const [name , setName ] = useState("");
  const [tweet , setTweet ] = useState("");
  function createtweet(){
    console.log(name,tweet)
  }
  return (

      <div className="shadow">
        <input name="name" placeholder="Name" onChange={e => setName(e.target.value)}/>
          <textarea
            maxLength="300"
            className="form-floating"
            placeholder="What's in your mind...."
            rows="3"
            onChange= {e => setTweet(e.target.value)}
          ></textarea>
        <button type="button" className="tweet-btn" onClick = {createtweet()} >
          Tweet
        </button>
      </div>
  );
}

export default Card;
