import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.svg';

const navigation = ({ token }) => {

    const active = 'text-teal-500 border-b-2 border-gray-600 inline-block';
    const navItemClasses = 'mr-5 hover:text-gray-900';
    return (
        <header className="text-gray-700">
            <div className="container mx-auto lg:px-5 bg-white mt-5 shadow-lg rounded flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="" />
                    <span className="ml-3 text-xl">Social <strong>Investment</strong></span>
                </NavLink>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink
                        activeClassName={active}
                        className={navItemClasses} exact to="/">Home</NavLink>
                    <NavLink
                        activeClassName={active}
                        className={navItemClasses} to="/apply">Apply Now</NavLink>
                    <NavLink
                        activeClassName={active}
                        className={navItemClasses} to="/profile">Profile</NavLink>
                    <NavLink
                        activeClassName={active}
                        className={navItemClasses} to="/help">Help</NavLink>
                    <NavLink
                        activeClassName={active}
                        className={navItemClasses} to="/support">Support</NavLink>

                    {!token &&
                        <NavLink
                            activeClassName={active}
                            className={navItemClasses} to="/signup">Sign up</NavLink>
                    }

                </nav>

                {/** if token is in localStorage display logout otherwise login */}
                {token ?
                    <NavLink
                        to="/logout"
                        className="inline-flex shadow-lg items-center bg-red-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0">
                        Logout
                    </NavLink>

                    : <NavLink
                        to="/login"
                        className="inline-flex shadow-lg items-center bg-teal-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0">
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    token: state.auth.token
})

export default connect(mapStateToProps)(navigation);
