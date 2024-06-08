import React from 'react'
import './Landing.css'
import Information from './Information'

export default function Landing() {
    return (
        <div className="Landing">
            <div className="menuBar">
                <span className="featureText logo">Shot Box Cafe</span>
                <div>
                    <a href="#information" className="navBtn">
                        Location
                    </a>
                    <a href="" className="navBtn">
                        Hire Us
                    </a>
                </div>
            </div>
            <div className="Hero">
                <h1>
                    Shot Box
                    <br />- Cafe -
                </h1>
            </div>
            <section id="information">
                <Information />
            </section>
        </div>
    )
}
