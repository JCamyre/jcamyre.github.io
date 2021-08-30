import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav role='navigation' class='nav-menu w-nav-menu'>
            <ul role='list' class='header-navigation'>
                <li class='nav-item-wrapper'>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}
