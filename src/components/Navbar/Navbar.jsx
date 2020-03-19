import React, { Component } from 'react';

// Default style / Image
import './Navbar.scss';
import Logo from '../../assets/image/logo-svg.svg';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>

                <div className="buttons-header">
                    <button className="btn-signIn">Sign In</button>
                    <button className="btn-contact">Contact Us</button>
                </div>
            </header>
        )
    }
}

export default Navbar;