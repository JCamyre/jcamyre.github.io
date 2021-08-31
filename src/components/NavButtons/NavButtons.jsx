import React, { useState } from 'react'
import Resume from '../../documents/Joseph S Camyre Resume.pdf';
import NavButton from '../NavButton/NavButton';
import { Link } from 'react-router-dom';
import './NavButtons.css'

const NavButtons = () => {
    const [current, setCurrent] = useState('home');

    const toggleCurrent = () => {
        if (!current) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }

        switch(current) {
            case 'home':
                break;
            case 'about':
                break;
            case 'portfolio':
                break;
            case 'resume':
                break;
        }
    }

    // With the switch current, when switching to a different route, change current. Before changing current, check which is current, and switch it to false.
    // Can load different divs by having a listener for windows.y, have like 4/5 div pages and switch cases

    return (
        <ul className='header-navigation'>
            <li className='nav-item-wrapper' style={{display: 'inline-block'}}>
            {/* I think I have to make a new button component because Button class overrides nav-link */}
                <NavButton>
                    <Link to='/'>Home</Link>
                </NavButton>
            </li>
            <li className='nav-item-wrapper'>
                <NavButton>
                    <Link to='/about'>About</Link>
                </NavButton>
            </li>
            <li className='nav-item-wrapper'>
                <NavButton>
                    <Link to='/portfolio'>Portfolio</Link>
                </NavButton>
            </li>
            <li className='nav-item-wrapper'>
                {/* Should resume open in the same tab or open new one? */}
                <NavButton>
                    <a href={Resume} target='_blank' rel='noreferrer'>Resume</a>
                </NavButton>
            </li>
        </ul>
        
    )
}

export default NavButtons
