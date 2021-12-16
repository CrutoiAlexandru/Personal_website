import "./Svg.css"

import React from 'react'

import Blob from "./blob-haikei.svg";

export default function Svg() {
    let list = [];
    let r = document.querySelector(':root')

    for(let i = 0; i < 10; i++) {
        list.push(more_svg());
    }

    function more_svg() {
        let max = 10;
        let min = 5;

        let styles = {
            width: (Math.random() * (max - min) ) + min + '%',
        }

        r.style.setProperty('--right-place', '-' + Math.random()*400 + '%');

        return (
            <img id="blobs--right" style={styles} className="blobs--right" src={Blob} alt="Blob" />
        )
    }

    return (
        <section className="blobs--right-wrapper">
            {
                list
            }
        </section>
    )
}
