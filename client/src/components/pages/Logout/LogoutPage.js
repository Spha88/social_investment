import React, { useEffect } from 'react';
import Container from '../../UI/Container';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/authentication';

const LogoutPage = ({ logout }) => {

    useEffect(() => logout(), []);

    return (
        <Container>
            <div className="p-10 text-center">
                <h2 className="text-3xl font-bold">Thank you for using our Services</h2>
                <div className="h-2 bg-teal-500 w-1/5 rounded mx-auto my-5"></div>
                <p className="text-xl">If you have a minute please give feedback, only 5 short questions</p>
            </div>
        </Container>
    )
}

export default connect(null, { logout })(LogoutPage)
