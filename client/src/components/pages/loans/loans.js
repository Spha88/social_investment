import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loan from './Loan';

const Loans = () => {

    const [loans, setLoans] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/loans')
            .then(res => {
                setLoans(res.data.loans);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container mx-auto my-10 bg-white rounded shadow-lg p-5">
            <header>
                <h2 className="text-4xl text-center mb-5">Loans</h2>
            </header>
            <main className="flex flex-wrap mb-4">
                {loans.map(loan => (
                    <Loan key={loan._id} loan={loan} />
                ))}
            </main>
        </div>
    )
}

export default Loans;
