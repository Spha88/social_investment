import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from '../../UI/Container';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';

const LoanApplication = () => {

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

            <header className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Enter Details of your loan</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Add all details and click on apply</p>
            </header>

            <main className="lg:w-1/2 md:w-2/3 mx-auto">
                <form className="flex flex-wrap -m-2" onSubmit={handleSubmit(onSubmit)}>

                    <div className="p-2 w-full">
                        <input name="amount" placeholder="Amount" type="number" step="50"
                            className={inputClasses}
                            ref={register({ required: 'Enter the loan amount' })}
                        />
                        {/** Error message */}
                        {errors.amount && (
                            <div className="text-red-500 pl-5">{errors.amount.message}</div>
                        )}
                    </div>

                    <div className="p-2 w-full">
                        <input name="interest" placeholder="Interest" type="number" step="0.10"
                            className={inputClasses}
                            ref={register({ required: 'Interest is required' })}
                        />
                        {/** Error message */}
                        {errors.interest && (
                            <div className="text-red-500 pl-5">{errors.interest.message}</div>
                        )}
                    </div>

                    <div className="p-2 w-full">
                        <input name="term" placeholder="Term" type="number"
                            className={inputClasses}
                            ref={register({ required: 'Term is required' })}
                        />
                        {/** Error message */}
                        {errors.term && (
                            <div className="text-red-500 pl-5">{errors.term.message}</div>
                        )}
                    </div>

                    <div className="p-2 w-full">
                        <button className="flex text-white bg-teal-800 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Apply</button>
                    </div>

                </form>
            </main>
        </Container>

    )
}

export default LoanApplication;
