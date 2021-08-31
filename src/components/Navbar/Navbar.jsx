import React from 'react';
import Button from '../Button1/Button1';
import './Navbar.css';
import NavButtons from '../NavButtons/NavButtons';
    
export default function Navbar(){
    return (
        <div className='navbar-container'>
            {/* <i class="fas fa-feather-alt"></i> */}
            {/* <i class="fas fa-signature"></i> */}
            <Button>
                <i class="fas fa-icicles" />
            </Button>
            <div className='header-menu-wrapper'>
                <nav role='navigation' class='nav-menu w-nav-menu'>
                    <NavButtons />
                </nav>
            </div>
        </div>
    )
}
