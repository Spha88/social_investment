import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { updateProfile, cleanUp, fetchProfile } from '../../../store/actions/index';

const BankingDetails = ({ updateProfile, cleanUp, updating, error, message, bankingDetails }) => {

    const { register, handleSubmit, errors } = useForm();

    const submit = data => {
        data = { bankingDetails: data };
        updateProfile(data);
    };



    console.log('banking details', bankingDetails);


    useEffect(() => {
        fetchProfile();

        return cleanUp();
        // eslint-disable-next-line
    }, [])

    // user managed to get here while not logged in

    return (
        <div className="px-10 relative">
            <div className="z-40">
                <header>
                    <h2 className="text-2xl mb-2 pl-5 ">Banking Details</h2>
                </header>
                <div className="h-18 mb-2 text-center">
                    {message &&
                        <p className={`m-0 bg-red-200 p-3 ${error ? 'bg-red-200' : 'bg-blue-200'}  block rounded`}>
                            {message}
                        </p>
                    }
                </div>
                <form onSubmit={handleSubmit(submit)}>

                    <div className="mb-5">
                        <div className={labelInputContClasses}>
                            <label className={labelClasses} htmlFor="bank">Bank name</label>
                            <select className={inputClasses} type="text" name="bank" autoComplete="off"
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
                                className={inputClasses}
                                autoComplete="off" type="text" name="accountNumber" placeholder="Enter your employer's name"
                                defaultValue={bankingDetails && bankingDetails.accountNumber}
                                ref={register({ required: 'Please enter your account number' })}
                            />
                        </div>
                        <div className={errorClasses}>{errors.accountNumber && errors.accountNumber.message}</div>
                    </div>

                    <div className="mb-5">
                        <div className={labelInputContClasses}>
                            <label className={labelClasses} htmlFor="accountType">Account Type</label>
                            <select
                                className={inputClasses} autoComplete="off" name="accountType" id="accountType"
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
                                autoComplete="off"
                                type="text"
                                name="accountHolder"
                                placeholder="Enter account holder Name and Surname"
                                defaultValue={bankingDetails && bankingDetails.accountHolder}
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
const mapStateToProps = state => ({
    error: state.profile.error,
    message: state.profile.message,
    updating: state.profile.updating,
    bankingDetails: state.profile.profile.bankingDetails
})

export default connect(mapStateToProps, { updateProfile, cleanUp, fetchProfile })(BankingDetails);
