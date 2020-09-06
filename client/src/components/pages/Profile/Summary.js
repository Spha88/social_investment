import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';

import PersonalDetails from './ProfileSections/PersonalDetails';
import EmployerDetails from './ProfileSections/EmployerDetails';
import BankingDetails from './ProfileSections/BankingDetails';

const Summary = ({ profile }) => {

    return (
        <div className="pt-0">
            <header className="border rounded px-3 py-10 bg-blue-100 text-center">
                <h2 className="text-2xl font-light">
                    According to your credit score you can borrow R5000
                    <br />
                    <Link to="/apply-slide"
                        className="bg-teal-500 rounded text-white px-8 py-1 mt-5 inline-block text-xl hover:bg-teal-800">
                        Apply Now</Link>
                </h2>
            </header>

            {profile ?
                (
                    <div className="mt-5">
                        <PersonalDetails profile={profile} />
                        <EmployerDetails profile={profile} />
                        <BankingDetails profile={profile} />
                    </div >
                )
                : (
                    <div className="p-10">
                        <SpinnerSmall />
                    </div>
                )
            }

        </div >
    )
}

const mapStateToProps = state => ({
    profile: state.profile.profile
})

export default connect(mapStateToProps)(Summary)
