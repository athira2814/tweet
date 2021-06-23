import React from 'react'
import NavigationComponent from "../components/NavigationComponent"
import FooterComponent from '../components/FooterComponent'

function Home() {
    return (
        <div>
            <NavigationComponent />
            <h1>home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia commodi qui ea harum ex porro consequuntur dolores. Esse, expedita autem porro doloremque ut voluptatum aliquam repellendus soluta, facere dicta sed?</p>

            <FooterComponent />
        </div>
    )
}

export default Home
