import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import FooterComponent from "../components/FooterComponent";
import Card from "../components/Card";


function CreateTweet() {
    return (
        <div>
            <NavigationComponent />
            <Card />
            <FooterComponent />
            
        </div>
    );
}

export default CreateTweet;
