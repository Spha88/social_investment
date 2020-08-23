import React from 'react';
import { useForm } from 'react-hook-form';
// import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

const LoanApplication = () => {

    const { register, handleSubmit } = useForm();

    // let history = useHistory();

    const onSubmit = data => {

        axios.post('http://localhost:3000/loans', { ...data, applicant: "5f3fbf055ff56d08748eb32a" })
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }

    const inputClasses = `w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2`

    return (

        <div className="container px-5 py-24 mx-auto bg-white mt-5 rounded shadow">

            <header className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Enter Details of your loan</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Add all details and click on apply</p>
            </header>

            <main className="lg:w-1/2 md:w-2/3 mx-auto">
                <form className="flex flex-wrap -m-2" onSubmit={handleSubmit(onSubmit)}>

                    <div className="p-2 w-full">
                        <input name="amount" placeholder="Amount" type="number"
                            className={inputClasses}
                            ref={register}
                        />
                    </div>

                    <div className="p-2 w-full">
                        <input name="interest" placeholder="Interest" type="number"
                            className={inputClasses}
                            ref={register}
                        />
                    </div>

                    <div className="p-2 w-full">
                        <input name="term" placeholder="Term" type="number"
                            className={inputClasses}
                            ref={register}
                        />
                    </div>

                    <div className="p-2 w-full">
                        <button className="flex text-white bg-teal-800 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Apply</button>
                    </div>

                </form>
            </main>
        </div>

    )
}

export default LoanApplication;
