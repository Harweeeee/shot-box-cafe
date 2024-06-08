import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')
    let [number, setNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const serviceId = 'service_vv394ui'
        const templateId = 'template_kes7gba'
        const publicKey = 'Zio6IV9P9v2qcffKf'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Shot Box Cafe',
            message: message,
            number: number,
        }

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response)
                setName('')
                setEmail('')
                setMessage('')
                setNumber('')
                alert('Your email has been sent, chat soon ☕')
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            })
    }

    return (
        <div className="Contact">
            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="evenOut">
                    <h2 className="featureText">Hire us for events</h2>
                    <div className="userDetails">
                        <input
                            className="detailInput"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        ></input>
                        <input
                            className="detailInput"
                            placeholder="Email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                        <input
                            className="detailInput"
                            placeholder="Phone number"
                            type="tel"
                            max="10"
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="userMessage">
                        <input
                            className="messageInput"
                            placeholder="Enter message"
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                        ></input>
                    </div>
                    <div className="submitButton">
                        <input type="submit"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
