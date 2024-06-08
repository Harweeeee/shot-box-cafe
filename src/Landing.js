import React from 'react'
import './Landing.css'
import Information from './Information'
import Contact from './Contact'
import hotcoffee from './assets/hot-coffee.png'
import colddrink from './assets/iced-coffee.png'
import snack from './assets/cookie.png'
import Item from './Item'

export default function Landing() {
    return (
        <div className="Landing">
            <div className="menuBar">
                <span className="featureText logo">Shot Box Cafe</span>
                <div>
                    <a href="#information" className="navBtn">
                        Location
                    </a>
                    <a href="#hireUs" className="navBtn">
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
            <div className="extraInfo">
                <Item
                    name="Hot Drinks"
                    src={hotcoffee}
                    alt="Icon depicting hot drink"
                />
                <Item
                    name="Cold Drinks"
                    src={colddrink}
                    alt="Icon depicting cold drink"
                />
                <Item name="Snacks" src={snack} alt="Available snack" />
            </div>
            <section id="information">
                <Information />
            </section>
            <section id="hireUs">
                <Contact />
            </section>
            <footer>Shot Box Cafe, Est 2023</footer>
        </div>
    )
}
