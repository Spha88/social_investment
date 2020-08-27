import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { updateProfile } from '../../../store/actions/index';

const BankingDetails = ({ updateProfile }) => {
    const { register, handleSubmit, errors } = useForm();
    const submit = data => {
        data = { bankingDetails: data };
        updateProfile(data);
    };

    return (
        <div className="px-10">
            <header>
                <h2 className="text-2xl mb-5">Banking Details</h2>
            </header>
            <form onSubmit={handleSubmit(submit)}>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="bank">Bank name</label>
                        <select className={inputClasses} type="text" name="bank"
                            ref={register({ required: 'Please select your bank' })}
                        >
                            <option value="">Select your bank</option>
                            <option value="ABSA">ABSA</option>
                            <option value="FNB">FNB</option>
                            <option value="Standard Bank">Standard Bank</option>
                            <option value="Capitec">Capitec</option>
                        </select>
                    </div>
                    <div className={errorClasses}>{errors.bank && errors.bank.message}</div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses} >
                        <label className={labelClasses} htmlFor="accountNumber">Account number</label>
                        <input
                            className={inputClasses} type="text" name="accountNumber" placeholder="Enter your employer's name"
                            ref={register({ required: 'Please enter your account number' })}
                        />
                    </div>
                    <div className={errorClasses}>{errors.accountNumber && errors.accountNumber.message}</div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="accountType">Account Type</label>
                        <select
                            className={inputClasses} name="accountType" id="accountType"
                            ref={register({ required: 'Please select your account type.' })}
                        >
                            <option value="">Select account type</option>
                            <option value="savings">Savings</option>
                            <option value="cheque">Cheque</option>
                            <option value="current">Current</option>
                            <option value="transmission">Transmission</option>
                        </select>
                    </div>
                    <div className={errorClasses}>{errors.accountType && errors.accountType.message}</div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="accountHolder">Account Holder</label>
                        <input className={inputClasses}
                            type="text"
                            name="accountHolder"
                            placeholder="Enter account holder Name and Surname"
                            ref={register({ required: 'Enter account holder full name' })}
                        />
                    </div>
                    <div className={errorClasses}>{errors.accountHolder && errors.accountHolder.message}</div>
                </div>

                <footer className="text-right">
                    <button
                        className="px-5 py-1 bg-teal-500 rounded text-white"
                        type="submit">Update</button>
                </footer>
            </form>
        </div>
    )
}
const labelInputContClasses = `
        lg:flex md:fex-col
`

const labelClasses = `
        md:w-1/4 md:mb-1 md:pl-5 flex self-center
    `
const inputClasses = `
        md:w-full
        lg:w-3/4
        border
        rounded
        px-5
        py-2
        focus:border-4
        focus:border-teal-500
        focus:outline-none
    `
const errorClasses = `
        error text-center text-red-700 h-5
    `

export default connect(null, { updateProfile })(BankingDetails);
