import "./Col1.css"

import React from 'react'

export default function Col1() {
    let list_right = [];
    let r = document.querySelector(':root')
    let max_nr_of_blobs = 20;

    for(let i = 0; i < max_nr_of_blobs; i++) {
        list_right.push(more_svg_right());
    }

    function more_svg_right() {
        let max = 5;
        let min = 2;

        let opacity = Math.random();
        let red = Math.random()*255;
        let rgb = `${red}, 20, 40`;

        let right_place = (Math.random() * (900 - 700) ) + 700;

        r.style.setProperty('--right-place', '-' + right_place + '%');
        r.style.setProperty('--right-place-start', right_place + 120 + '%');

        let styles = {
            width: (Math.random() * (max - min) ) + min + 'em',
            backgroundColor: `rgba(${rgb}, ${opacity})`
        }

        return (
            <div id="blobs--right" style={styles} className="blobs--right"></div>
        )
    }

    let list_left = [];

    for(let i = 0; i < max_nr_of_blobs; i++) {
        list_left.push(more_svg_left());
    }

    function more_svg_left() {
        let max = 5;
        let min = 2;

        let opacity = Math.random();
        let red = Math.random()*255;
        let rgb = `${red}, 20, 40`;

        let left_place = (Math.random() * (900 - 700) ) + 700;

        r.style.setProperty('--left-place',  left_place + '%');
        r.style.setProperty('--left-place-start', '-' + left_place - 120 + '%');

        let styles = {
            width: (Math.random() * (max - min) ) + min + 'em',
            backgroundColor: `rgba(${rgb}, ${opacity})`
        }
        
        return (
            <div id="blobs--left" style={styles} className="blobs--left"></div>
        )
    }

    return (
        <>
        <section className="blobs--right-wrapper">
            {
                list_right
            }
        </section>
        <section className="blobs--left-wrapper">
            {
                list_left
            }
        </section>
        </>
    )
}
