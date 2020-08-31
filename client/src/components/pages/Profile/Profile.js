import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfileNav from './ProfileNav';
import Container from '../../UI/Container';
import PersonalDetails from './PersonalDetails';
import EmployerDetails from './EmployerDetails';
import BankingDetails from './BankingDetails';
import { fetchProfile } from '../../../store/actions/profileAction';
import Summary from './Summary';


const Profile = ({ fetchProfile }) => {

    useEffect(() => {
        fetchProfile();
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <header className="p-5 text-center mb-5">
                <h1 className="text-center text-3xl">Profile</h1>
            </header>
            <div className="flex pb-10">
                <aside className="md:w-1/4 border-r border-teal-500 px-5">
                    <ProfileNav />
                </aside>
                <main className="w-3/4 p-5 p-1">
                    <Switch>
                        <Route exact path="/profile" component={Summary} />
                        <Route path="/profile/personal-details" component={PersonalDetails} />
                        <Route path="/profile/employer-details" component={EmployerDetails} />
                        <Route path="/profile/banking-details" component={BankingDetails} />
                    </Switch>
                </main>
            </div>
        </Container>
    )
}

export default connect(null, { fetchProfile })(Profile)
