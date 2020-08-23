import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Loans = () => {

    const [loans, setLoans] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/loans')
            .then(res => {
                setLoans(res.data.loans);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(loans);

    return (
        <div className="container mx-auto mt-10 bg-white rounded shadow p-5">
            <header>
                <h2 className="text-4xl text-center mb-5">Loans</h2>
            </header>
            <main>
                {loans.map(loan => (
                    <div key={loan._id}
                        className="mb-5 p-5 border border-gray-500 rounded"
                    >
                        <h2><strong>Amount: </strong>R{loan.amount}</h2>
                        <h3><strong>Interest: </strong>{loan.interest}%</h3>
                        <div>
                            <span><strong>Payment Date: </strong> {loan.paymentDate} </span>
                        </div>
                        {loan.offers.length !== 0 && (
                            <React.Fragment>
                                <div className="h-1 bg-teal-400 my-5"></div>
                                <h2 className="text-xl text-center">Available offers</h2>
                                <ul>
                                    {loan.offers.map(offer => (
                                        <li key={offer._id} className="flex justify-between p-2 my-1 rounded hover:bg-gray-200">
                                            <h3><strong>Interest: </strong>{offer.interest}</h3>
                                            <button
                                                className="hover:bg-blue-700 text-gray py-0 px-4 border border-blue-700 rounded">
                                                accept
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        )}
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Loans;
