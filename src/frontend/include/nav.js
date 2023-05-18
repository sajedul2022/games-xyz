import React from 'react'
import { Link } from 'react-router-dom'
const nav = () => {
  return (
        <header className="header-section header-hidden">
            <div className="header-wrapper">
            <div className="menu-logo-adjust d-flex align-items-center">
                <div className="logo-menu me-5">
                    <Link to="/" className="logo">
                        <img src="https://placehold.co/220x80?text=XYZ+GAME" alt="logo" />
                    </Link>
                    <Link to="/" className="dark-logo">
                        <img src="https://placehold.co/220x80?text=XYZ+GAME" alt="logo" />
                    </Link>
                </div>
                <div className="header-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="main-menu">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Live</a>
                    </li>
                    <li>
                        <a href="#">Sports</a>
                    </li>
                    <li>
                        <a href="#">V-Sport</a>
                    </li>
                    <li>
                        <a href="#">Promotions</a>
                    </li>
                    <li>
                        <a href="#">eSports</a>
                    </li>
                    <li>
                        <a href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal2">Quick Bets</a>
                    </li>
                    <li className="menu--btn">
                  
                    <Link className="login-btn" to={'/login'}>Log In</Link>
                    </li>
                    <li className="menu--btn">
                    <Link className="signup-btn" to={'/signup'}>Sign Up</Link>
                    </li>
                </ul>
            </div>
            <div className="right-menu-reature">
                <div className="language">
                    <div className="nice-select" tabIndex="0">
                        <span className="current">En</span>
                        <ul className="list">
                        <li data-value="1" className="option selected focus">En</li>
                        <li data-value="2" className="option">Bn</li>
                        <li data-value="3" className="option">Us</li>
                        </ul>
                        <div className="glo-icon">
                        <i className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="mode--toggle">
                    <img src="assets/img/sun.png" alt="" />
            </div>
                <div className="signup-area">
                <Link  className="btn--two" to={'/login'}>Log In</Link>
                    <Link  className="btn--two" to={'/signup'}>Sign Up</Link>
                </div>
            </div>
            </div>
        </header>
        
  )
}

export default nav