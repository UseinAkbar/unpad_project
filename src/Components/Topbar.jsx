import React from 'react';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className="bg-navbar text-nav font-medium p-4 flex justify-center space-x-7">
            <NavLink to="/" className="hover:underline" activeClassName="text-selected" exact>Home</NavLink>
            <NavLink to="/stages" className="hover:underline" activeClassName="text-selected" exact>Stages</NavLink>
            <NavLink to="/livestream" className="hover:underline" activeClassName="text-selected" exact>Livestream</NavLink>
            <NavLink to="/info" className="hover:underline" activeClassName="text-selected" exact>Info</NavLink>
        </div>
    )
}

export default Topbar