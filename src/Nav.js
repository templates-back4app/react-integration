import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav className={"navbar bg-primary"}>
            <a className={"navbar-brand text-light"} href="/" style={{color: "#fff"}}>
                Back4App
            </a>
        </nav>
    );
}

export default Nav;
