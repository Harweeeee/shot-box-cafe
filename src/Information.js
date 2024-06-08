import React from 'react'
import image from './assets/amelia-shot-box-cafe.jpg'
import './Information.css'

export default function Information() {
    return (
        <div className="Information">
            <div className="row gridContainer primaryText">
                <div className="col-sm-6 ">
                    <img
                        className="img-fluid rounded mx-auto d-block introductionImage"
                        src={image}
                        alt="Amelia, owner of Shot Box Cafe"
                    />
                </div>
                <div className="col-sm-6 infoContainer">
                    <div className="col flexTogether">
                        <a
                            href="https://www.facebook.com/minimintcafe/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="lni lni-facebook"></i>
                        </a>
                        <p>
                            <span>
                                <strong>Check us out on Facebook</strong>
                                <br />
                                To see updates and where we are today
                            </span>
                        </p>
                    </div>

                    <div className="col flexTogether">
                        <i class="lni lni-caravan"></i>
                        <p>
                            <strong>Base Location</strong>
                            <br />
                            Lions Riverside Park
                            <br />
                            137-169 Cusack Lane, Jimboomba, QLD, 4280 <br />
                            Closed Mondays
                        </p>
                    </div>
                    <div className="col flexTogether">
                        <i class="lni lni-coin"></i>
                        <p>
                            <strong>Cash and Eftpos Available</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
