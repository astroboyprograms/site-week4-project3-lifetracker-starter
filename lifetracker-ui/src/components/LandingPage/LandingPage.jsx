import React from 'react'
import './LandingPage.css'
import HeroImage from '../../assets/hero-img.jpg'

const LandingPage = () => {
    return (
        <div className = 'landing-page'>
            <div className ='container'>
                <div className = 'hero'>
                    <div className='cta'>
                        <h1>LifeTracker</h1>
                        <h2><span className='primary-color'> Helping you take back control of your world</span></h2>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                            Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                            laboriosam eos praesentium veritatis!</p>
                    </div>
                    <div className = 'hero-img'>
                        <img src = {HeroImage} alt = "Hero" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LandingPage

// - [x] Build the **`LandingPage`** component to:
//   - [x] Render JSX that is wrapped by an element with the class name of `landing-page`
//   - [x] Render an element with the class name of `hero`
//     - [x] Inside it, display a large hero image using an `img` element with the class name of `hero-img`
//     - [x] Render a brief blurb on what this application is about inside an element with the class name of `cta`
//   - [x ] Allow unauthenticated access