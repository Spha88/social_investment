import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';

const Loan = ({ loan }) => {
    let history = useHistory();
    const [showOfferForm, setShowOfferForm] = useState(false);

    const { register, handleSubmit } = useForm();

    const submit = data => {
        console.log(data);
        Axios.post(`http://localhost:3000/loans/${loan._id}/offers`, { ...data, client: '5f3fbf055ff56d08748eb32a' })
            .then(res => {
                console.log(res);
                setShowOfferForm(false);
                history.push('/loans');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="w-1/3 mb-5 p-2 ">
            <div className="border border-gray-500 rounded p-6 h-full">
                <h2><strong>Amount: </strong>R{loan.amount}</h2>
                <h3><strong>Interest: </strong>{loan.interest}%</h3>
                <div>
                    <span><strong>Payment Date: </strong> {loan.paymentDate} </span>
                </div>
                {loan.offers.length !== 0 && (
                    <React.Fragment>
                        <div className="h-1 bg-teal-400 my-5"></div>
                        <h2 className="text-l text-center">Available offers</h2>
                        <ul>
                            {loan.offers.map(offer => (
                                <li key={offer._id} className="flex justify-between p-2 my-1 rounded hover:bg-gray-200">
                                    <h3><strong>Interest: </strong>{offer.interest}</h3>
                                    <button className="hover:bg-blue-700 text-gray text-sm px-4 border border-blue-700 rounded">accept</button>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                )}
                <footer className="mt-3 text-center text-sm text-white">

                    {showOfferForm && (
                        <div className="text-black mb-2">
                            <form onSubmit={handleSubmit(submit)}>
                                <input
                                    className="w-full border border-gray-500 rounded p-2 mb-3"
                                    ref={register}
                                    type="number" name="interest" placeholder="Enter Interest" />

                                <button className="hover:bg-teal-700 shadow rounded bg-teal-500  py-1 px-3 mr-2" type="submit">Add Offer</button>
                                <div
                                    onClick={() => setShowOfferForm(!showOfferForm)}
                                    className="hover:bg-red-700 shadow rounded bg-red-500 cursor-pointer  py-1 px-3 inline-block">Cancel</div>

                            </form>
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

export default Loan
