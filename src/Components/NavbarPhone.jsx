import React from 'react'

const NavbarPhone = () => {
    return (
        <nav className="navbar">
            <input type="checkbox" id="toggleNavbar" className="navbar__input" />
            <label htmlFor="toggleNavbar" className="navbar__label">
                <span className="navbar__cta"></span>
            </label>
            <div className="navbar__background"></div>
            <div className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__item"><a href="/stages" className="navbar__link">Stages</a></li>
                    <li className="navbar__item"><a href="/livestream" className="navbar__link">Livestream</a></li>
                    <li className="navbar__item"><a href="#" className="navbar__link">Info</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarPhone