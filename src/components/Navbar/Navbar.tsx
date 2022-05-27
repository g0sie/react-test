import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MenuItems from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <img src="nav-logo.png" className="navbar-logo" alt='logo' />
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link className='nav-links' to={item.url} key={index} onClick={this.handleClick}>
                                {item.title}
                            </Link>
                        )
                    })}
                </div>
            </nav>
        )
    }
}

export default Navbar