import React, { useState } from 'react'
import './NavButton.css';

// If the button is clicked, change className to nav-link.current

const NavButton = (props) => {
    const [current, setCurrent] = useState(false);

    const toggleCurrent = () => {
        if (!current) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }
    }

    return (
        <button
        className={props.current ? 'nav-link current' : 'nav-link'}>
            {props.children}
        </button>
    )
}

export default NavButton
