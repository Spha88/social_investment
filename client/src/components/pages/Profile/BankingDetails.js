import React from 'react';
import { useForm } from 'react-hook-form';

const BankingDetails = () => {
    const { register, handleSubmit } = useForm();
    const submit = data => console.log(data);


    return (
        <div className="px-10">
            <header>
                <h2 className="text-2xl mb-5">Banking Details</h2>
            </header>
            <form onSubmit={handleSubmit(submit)}>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="bankname">Bank name</label>
                        <select className={inputClasses} ref={register} type="text" name="bankname">
                            <option>Select your bank</option>
                            <option value="absa">Absa</option>
                            <option value="fbb">FNB</option>
                            <option value="stdbank">Standard Bank</option>
                            <option value="capitec">Capitec</option>
                        </select>
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses} >
                        <label className={labelClasses} htmlFor="accountnumber">Account number</label>
                        <input className={inputClasses} ref={register} type="text" name="accountnumber" placeholder="Enter your employer's name" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="accounttype">Account Type</label>
                        <select className={inputClasses} ref={register} name="accounttype" id="accounttype">
                            <option value="">Select account type</option>
                            <option value="savings">Savings</option>
                            <option value="cheque">Cheque</option>
                            <option value="current">Current</option>
                            <option value="transmission">Transmission</option>
                        </select>
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="accountholder">Account Holder</label>
                        <input className={inputClasses}
                            ref={register} type="text"
                            name="accountholder"
                            placeholder="Enter account holder Name and Surname" />
                    </div>
                    <div className={errorClasses}></div>
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

export default BankingDetails;
