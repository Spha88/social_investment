import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../../UI/Container';
import Loan from './Loan';
import Spinner from '../../UI/Spinner/Spinner';

const Loans = () => {

    const [loans, setLoans] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/loans')
            .then(res => {
                setTimeout(() => { setLoans(res.data.loans); }, 1000);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <Container>
            <header className="pt-10">
                <h2 className="text-4xl text-center mb-5">Loans</h2>
            </header>
            <main className="flex flex-wrap mb-4 w-full">
                {loans.length ? (
                    loans.map(loan => (
                        <Loan key={loan._id} loan={loan} />
                    ))
                ) :
                    <div className="w-full h-screen flex justify-center pt-20">
                        <Spinner />
                    </div>
                }
            </main>
        </Container>
    )
}

export default Loans;
