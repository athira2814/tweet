import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import FooterComponent from "../components/FooterComponent";
import { tweets } from "../assets/constants";

function Home() {
  return (
    <div>
      <NavigationComponent />
      <main className="container mt-5 pt-4">
        {tweets.map((tweet) => {
          return (
            <div className="card">
              <p className="name-display">{tweet.name}</p>
              <p className="tweet-display">{tweet.content}</p>
            </div>
          )
        }
        )
        }
      </main>
      <FooterComponent />
    </div>
  );
}

export default Home;
