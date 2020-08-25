import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

import { formatDate } from '../../../utilities/utilities';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';

const Loan = ({ loan }) => {
    const [currentLoan, setCurrentLoan] = useState(loan);
    const [showOfferForm, setShowOfferForm] = useState(false);
    const [addingOffer, setAddingOffer] = useState(false);

    const { register, handleSubmit, errors } = useForm();

    const submit = data => {
        setAddingOffer(true);

        // Todo = remove setTimeout in production
        setTimeout(() => {
            Axios.post(`http://localhost:3000/loans/${currentLoan._id}/offers`, { ...data, client: '5f3fbf055ff56d08748eb32a' })
                .then(res => {
                    console.log("Response")
                    setShowOfferForm(false);
                    setAddingOffer(false);
                    setCurrentLoan(res.data.loan);

                })
                .catch(err => {
                    alert("The has been an error")
                });
        }, 500)
    };

    return (
        <div className="sm:w-full md:w-1/2 lg:w-1/3 w-full mb-1  sm:p-0 md:p-3">
            <div className="border border-gray-500 rounded p-6 h-full w-full">

                <header className="text-center">
                    <h2 className="text-2xl border-2 border-teal-500  inline-block px-6 py-1 mb-3 rounded"><strong>R{currentLoan.amount}</strong></h2>
                    <h3><strong>Interest: </strong>{currentLoan.interest}%</h3>
                    <span><strong>Payment Date: </strong> {formatDate(currentLoan.paymentDate)} </span>
                </header>


                {currentLoan.offers.length !== 0 && (
                    <React.Fragment>
                        <div className="h-1 bg-teal-400 my-5 w-full"></div>

                        <h2 className="text-l text-center">Available offers</h2>
                        <ul>
                            {currentLoan.offers.map(offer => (
                                <li key={offer._id} className="flex justify-between p-2 my-1 rounded hover:bg-gray-200">
                                    <h3><strong>Interest: </strong>{offer.interest}%</h3>
                                    <button className="hover:bg-blue-700 text-gray text-sm px-4 border border-blue-700 rounded">accept</button>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                )}

                <footer className="mt-3 text-center text-sm text-white">
                    {showOfferForm && (

                        <div className="text-black mb-2">
                            {/** While adding an offer display Spinner otherwise form */}
                            {addingOffer ?
                                <SpinnerSmall />
                                : <form onSubmit={handleSubmit(submit)}>
                                    <input
                                        className={`w-full border ${errors.interest ? 'border-red-500' : 'border-gray-500'}  rounded p-2 outline-none`}
                                        ref={register({ required: 'Interest is required on offer' })}
                                        type="number" min="0" max="35"
                                        name="interest" placeholder="Enter Interest" step="0.10" />

                                    {/** Show error message if there is an error */}
                                    <div className="mb-3 text-red-500">{errors.interest && errors.interest.message}</div>


                                    <button className="hover:bg-teal-700 shadow rounded bg-teal-500  py-1 px-3 mr-2" type="submit">Add Offer</button>
                                    <div
                                        onClick={() => setShowOfferForm(!showOfferForm)}
                                        className="hover:bg-red-700 shadow rounded bg-red-500 cursor-pointer  py-1 px-3 inline-block">Cancel</div>

                                </form>
                            }
                        </div>
                    )}

                    {!showOfferForm &&
                        <button
                            onClick={() => setShowOfferForm(!showOfferForm)}
                            className="hover:bg-teal-700 shadow rounded bg-teal-500  py-1 px-3">Make an Offer</button>}
                </footer>
            </div>
        </div>
    )
}

export default Loan;
