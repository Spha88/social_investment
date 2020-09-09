import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.scss';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Logo}>
                <img src={logo} alt="company brand icon and name" />
                <h2>Social <span>Investment</span></h2>
            </div>

            <nav className={classes.Nav}>
                <h2>Menu</h2>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/apply">Apply Now</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/help">Help</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us">Policy</NavLink>
                </li>
            </nav>

            <div className={classes.FollowUs}>
                <h2>Follow Us</h2>
                <ul>
                    <li><a href="!#">Twitter</a></li>
                    <li><a href="!#">Facebook</a></li>
                    <li><a href="!#">Instagram</a></li>
                    <li><a href="!#">LinkedIn</a></li>
                    <li><a href="!#">WhatsApp</a></li>
                </ul>
            </div>

            <div className={classes.ContactUs}>
                <h2>Contact Us</h2>
                <ul>
                    <li><a href="tel:0781160376">0761160376</a></li>
                    <li><a href="mailto:mr.smehlomakulu@gmail.com">mr.smehlomakulu@gmail.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
