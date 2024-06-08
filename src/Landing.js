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
            <footer>
                <span>Shot Box Cafe, Est 2023</span>
                <div className="attribution">
                    <span>
                        Hot icon from{' '}
                        <a
                            className="attLink"
                            href="https://www.freepik.com/?_gl=1*1vg1auh*test_ga*ODkwOTE4MjY5LjE3MDU3Mjk0MTA.*test_ga_523JXC6VL7*MTcxNzgzMzk5NS41LjAuMTcxNzgzMzk5NS42MC4wLjA.*fp_ga*ODkwOTE4MjY5LjE3MDU3Mjk0MTA.*fp_ga_1ZY8468CQB*MTcxNzgzMzk5NS41LjAuMTcxNzgzMzk5NS42MC4wLjA."
                        >
                            Freepik
                        </a>
                    </span>
                    <span>
                        Cold icon from{' '}
                        <a
                            className="attLink"
                            href="https://www.flaticon.com/authors/mikan933"
                        >
                            Mikan933, Flaticon
                        </a>
                    </span>
                    <span>
                        Cookie icon from{' '}
                        <a
                            className="attLink"
                            href="https://www.flaticon.com/authors/iconmarketpk"
                        >
                            IconMarketPK, Flaticon
                        </a>
                    </span>
                    <span>
                        Other icons by{' '}
                        <a
                            className="attLink"
                            href="https://lineicons.com/icons"
                        >
                            Lineicons
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}
