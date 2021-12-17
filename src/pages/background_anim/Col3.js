import "./Col3.css"

import React from 'react'

export default function Col3() {
    let max_nr_of_blobs = 20;

    let list_right = [];
    let r = document.querySelector(':root')

    for(let i = 0; i < max_nr_of_blobs; i++) {
        list_right.push(more_svg_right());
    }

    function more_svg_right() {
        let max = 5;
        let min = 2;

        let opacity = Math.random();
        let red = Math.random()*255;
        let rgb = `${red}, 20, 40`;

        let right_place = (Math.random() * (300));

        r.style.setProperty('--right-place-3', '-' + right_place + '%');
        r.style.setProperty('--right-place-start-3', right_place + 120 + '%');

        let styles = {
            width: (Math.random() * (max - min) ) + min + '%',
            backgroundColor: `rgba(${rgb}, ${opacity})`
        }

        return (
            <div id="blobs--right-3" style={styles} className="blobs--right-3"></div>
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

        let left_place = (Math.random() * (300));

        r.style.setProperty('--left-place-3',  left_place + '%');
        r.style.setProperty('--left-place-start-3', '-' + left_place - 120 + '%');

        let styles = {
            width: (Math.random() * (max - min) ) + min + '%',
            backgroundColor: `rgba(${rgb}, ${opacity})`
        }

        return (
            <div id="blobs--left-3" style={styles} className="blobs--left-3"></div>
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
