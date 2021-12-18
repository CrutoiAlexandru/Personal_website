import "./Col2.css"

import React from 'react'

export default function Col2() {
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

        let size = (Math.random() * (max - min) ) + min;

        let right_place = (Math.random() * (700 - 300) ) + 300;

        r.style.setProperty('--right-place-2', '-' + right_place + '%');
        r.style.setProperty('--right-place-start-2', right_place + 120 + '%');

        let styles = {
            width: size + 'em',
            height: size + 'em',
            backgroundColor: `rgba(${rgb}, ${opacity})`
        }

        return (
            <div id="blobs--right-2" style={styles} className="blobs--right-2"></div>
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

        let size = (Math.random() * (max - min) ) + min;

        let left_place = (Math.random() * (700 - 300) ) + 300;

        r.style.setProperty('--left-place-2',  left_place + '%');
        r.style.setProperty('--left-place-start-2', '-' + left_place - 120 + '%');

        let styles = {
            width: size + 'em',
            height: size + 'em',
            backgroundColor: `rgba(${rgb}, ${opacity})`
        }

        return (
            <div id="blobs--left-2" style={styles} className="blobs--left-2"></div>
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
