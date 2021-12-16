import "./css/Home.css"

import React from 'react'
import { Link } from "react-router-dom";

import Svg from "./../Svg.js"

export default function Home() {

    return (
        <>
        <Svg></Svg>
        <div className="title-bar">
          <h1 >Crutoi's website</h1>
        </div>
        <div className="cards-wrapper" >
          <Link to="/aboutme" className="about-me-card" id="1" >
            <h2>About me</h2>
          </Link>
          <a href="https://github.com/CrutoiAlexandru" className="my-code-card">
            <h2>My code</h2>
          </a>
          <Link to="/contactme" className="contact-me-card">
            <h2>Contact me</h2>
          </Link>
        </div>
        </>
      )
}
