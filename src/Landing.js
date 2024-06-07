import React from 'react'
import './Landing.css'
import Information from './Information'

export default function Landing() {
    return (
        <div className="Landing">
            <div className="Hero">
                <h1>
                    Shot Box
                    <br />- Cafe -
                </h1>
            </div>
            <Information />
        </div>
    )
}
