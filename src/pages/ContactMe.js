import "./css/ContactMe.css"

import React from 'react'

import Col1 from "./background_anim/Col1.js"
import Col2 from "./background_anim/Col2.js"
import Col3 from "./background_anim/Col3.js"

export default function ContactMe() {
  return (
      <>
      <Col1></Col1>
      <Col2></Col2>
      <Col3></Col3>
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
