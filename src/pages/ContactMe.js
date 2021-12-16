import "./css/ContactMe.css"

import React from 'react'

export default function ContactMe() {
    return (
        <>
        <div className="title-bar__contact-me">
          <h1 >Contact me</h1>
        </div>
        <div className="cards-wrapper__contact-me" >
          <a href="https://gmail.com" className="cards-email">
            <p >Contact me on my email at: crutoi2001@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/alexandru-crutoi-12794320a" className="cards-linkedin">
            <p>Contact me on my linkedin</p>
          </a>
        </div>
        </>
    )
}
