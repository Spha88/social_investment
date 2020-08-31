import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { updateProfile, cleanUp } from '../../../../store/actions/index';
import Banks from '../../../../assets/lists/banks';
import UpdateMessage from '../../../UI/UpdateMessage/UpdateMessage';

const BankingDetails = ({ updateProfile, cleanUp, updating, error, message, bankingDetails }) => {

    const { register, handleSubmit, errors } = useForm();

    const submit = data => {
        data = { bankingDetails: data };
        updateProfile(data);
    };

    useEffect(() => {

        return cleanUp();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="z-40">
                <header>
                    <h2 className="text-2xl mb-1 pl-5 ">Banking Details</h2>
                </header>

                {/** Display spinner when updating and update message when done */}
                <UpdateMessage message={message} updating={updating} error={error} />

                <form onSubmit={handleSubmit(submit)}>

                    {/** Bank name input */}
                    <div className="mb-5">
                        <div className={labelInputContClasses}>
                            <label className={labelClasses} htmlFor="bank">Bank name</label>
                            <select className={inputClasses} type="text" name="bank" autoComplete="off"
                                defaultValue={bankingDetails && bankingDetails.bank}
                                ref={register({ required: 'Please select your bank' })}
                            >
                                <option value="">Select your bank</option>
                                {Banks.map(bank => (
                                    <option key={bank.name} value={bank.name}>
                                        {bank.description}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={errorClasses}>{errors.bank && errors.bank.message}</div>
                    </div>

                    {/** Account Number input */}
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

                    {/** Account type input */}
                    <div className="mb-5">
                        <div className={labelInputContClasses}>
                            <label className={labelClasses} htmlFor="accountType">Account Type</label>
                            <select
                                className={inputClasses} autoComplete="off" name="accountType" id="accountType"
                                defaultValue={bankingDetails && bankingDetails.accountType}
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

                    {/** Account Holder name input */}
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
        </div >
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

export default connect(mapStateToProps, { updateProfile, cleanUp })(BankingDetails);
