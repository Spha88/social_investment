import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileNav = () => {
    return (
        <ul>
            <li>
                <NavLink
                    className={navLinkClasses}
                    activeClassName={activeClassName}
                    exact
                    to="/profile">Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={navLinkClasses}
                    activeClassName={activeClassName}
                    exact
                    to="/profile/account">Account
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={navLinkClasses}
                    activeClassName={activeClassName}
                    to="/profile/personal-details">Personal Details
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={navLinkClasses}
                    activeClassName={activeClassName}
                    to="/profile/employer-details">
                    Employer details
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={navLinkClasses}
                    activeClassName={activeClassName}
                    to="/profile/banking-details">
                    Banking details
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={navLinkClasses}
                    activeClassName={activeClassName}
                    to="/profile/documents">
                    Documents
                </NavLink>
            </li>
        </ul>
    )
}

const activeClassName = ` bg-teal-500 text-white hover:bg-teal-500`

const navLinkClasses = `hover:bg-gray-200 py-3 px-5 rounded block mb-2`

export default ProfileNav
