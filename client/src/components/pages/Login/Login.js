import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import Container from '../../UI/Container';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';

const Login = () => {

    const [addingLoan, setAddingLoan] = useState(false);
    const [displayFeedBackMessage, setDisplayFeedBackMessage] = useState(false);
    const [feedBackMessage, setFeedBackMessage] = useState('');
    const [error, setError] = useState(false);

    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();

    const successRedirect = () => {
        // Display success message before redirect for 3 seconds
        setDisplayFeedBackMessage(true);
        setFeedBackMessage('Loan application added, you will be redirected');

        setTimeout(() => {
            history.push('/loans');
        }, 4000)
    }

    const warnApplicationFailure = () => {
        // When error is true feedback message background will be red;
        setError(true);
        setAddingLoan(false);
        setDisplayFeedBackMessage(true);
        setFeedBackMessage("Sorry loan application did not go through, try again later");

        // Hide feedback message after 4 seconds;
        setTimeout(() => {
            setDisplayFeedBackMessage(false);
            setError(false);
        }, 4000);
    }

    const onSubmit = data => {

        // Display a spinner while adding loan.
        setAddingLoan(true);

        axios.post('http://localhost:3000/loans', { ...data, applicant: "5f3fbf055ff56d08748eb32a" })
            .then(res => {

                // remove the spinner
                setAddingLoan(false);

                successRedirect();
            })
            .catch(err => warnApplicationFailure());

    }

    const inputClasses = `w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2`

    return (

        <Container>

            {/** Spinner displays while making an http request to add loan */}
            {addingLoan && (
                <div className="absolute flex justify-center border inset-0 h-full w-full bg-white bg-opacity-75 p-5">
                    <SpinnerSmall />
                </div>
            )}

            {/* Display message after adding a loan for 3 seconds */}
            {displayFeedBackMessage && (
                <div className="absolute flex justify-center content-center border inset-0 h-full w-full bg-white bg-opacity-75 p-5">
                    <div className={`self-center ${error ? 'bg-red-800' : 'bg-blue-700'} text-white rounded p-5 px-8`}>
                        {feedBackMessage}
                    </div>
                </div>
            )}

            <header className="flex flex-col text-center w-full mb-5">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">Log In</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed">
                    or <Link to="/signup"><span className="text-teal-300">Sign up</span></Link>
                </p>
            </header>

            <main className="lg:w-1/3 md:w-2/5 sm:w-1/1 mx-auto pb-6">
                <form className="flex flex-wrap -m-2" onSubmit={handleSubmit(onSubmit)}>

                    <div className="p-2 w-full">
                        <input name="email" placeholder="Email" type="text"
                            className={inputClasses}
                            ref={register({ required: 'Enter your email.' })}
                        />
                        {/** Error message */}

                        <div className="text-red-500 text-sm pl-5 h-3">{errors.email && errors.email.message}</div>

                    </div>

                    <div className="p-2 w-full">
                        <input name="password" placeholder="Password"
                            className={inputClasses}
                            ref={register({ required: 'Password is required' })}
                        />
                        {/** Error message */}
                        <div className="text-red-500 text-sm pl-5 h-3">{errors.password && errors.password.message}</div>

                    </div>

                    <div className="p-2 w-full text-center">
                        <button className="text-white bg-teal-800 border-0 py-1 px-8 focus:outline-none hover:bg-teal-600 rounded">Login In</button>
                    </div>
                </form>
            </main>
        </Container>

    )
}

export default Login;
