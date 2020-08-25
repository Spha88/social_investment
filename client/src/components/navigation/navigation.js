import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <header className="text-gray-700">
            <div className="container mx-auto lg:px-5 bg-white mt-5 shadow-lg rounded flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to="/loans" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Social <strong>Investment</strong></span>
                </NavLink>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink
                        activeClassName="text-teal-500 border-b-2 border-gray-600 inline-block"
                        className="mr-5 hover:text-gray-900" to="/loans">Loans</NavLink>
                    <NavLink
                        activeClassName="text-teal-500 border-b-2 border-gray-600 inline-block"
                        className="mr-5 hover:text-gray-900" to="/apply">Get a loan</NavLink>
                    <NavLink
                        activeClassName="text-teal-500 border-b-2 border-gray-600 inline-block"
                        className="mr-5 hover:text-gray-900" to="/profile">Profile</NavLink>
                    <NavLink
                        activeClassName="text-teal-500 border-b-2 border-gray-600 inline-block"
                        className="mr-5 hover:text-gray-900" to="/help">Help</NavLink>
                    <NavLink
                        activeClassName="text-teal-500 border-b-2 border-gray-600 inline-block"
                        className="mr-5 hover:text-gray-900" to="/support">Support</NavLink>
                </nav>

                <NavLink
                    to="/login"
                    className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
                    Login
                </NavLink>
            </div>
        </header>
    )
}

export default navigation