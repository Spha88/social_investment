import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalDetails = () => {
    const { register, handleSubmit } = useForm();
    const submit = data => console.log(data);


    return (
        <div className="px-10">
            <header>
                <h2 className="text-2xl mb-5">Personal Details</h2>
            </header>
            <form onSubmit={handleSubmit(submit)}>
                <div className="mb-5">
                    <div className={labelInputContClasses} >
                        <label className={labelClasses} htmlFor="name">Name</label>
                        <input className={inputClasses} ref={register} type="text" name="name" placeholder="Enter your name" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="surname">Surname</label>
                        <input className={inputClasses} type="text" name="surname" placeholder="Enter your surname" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="name">SA ID No.</label>
                        <input className={inputClasses} type="text" name="name" placeholder="ID Number" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="name">Cell Phone</label>
                        <input className={inputClasses} type="text" name="name" placeholder="Enter your cellphone number" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="name">Email</label>
                        <input className={inputClasses} type="email" name="email" placeholder="Enter your cellphone number" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="name">Address</label>
                        <div className="w-3/4">
                            <input
                                className={inputGroupClasses}
                                type="email"
                                name="email"
                                placeholder="Enter your cellphone number" />
                            <input
                                className={inputGroupClasses}
                                type="email"
                                name="email"
                                placeholder="Enter your cellphone number" />
                            <input
                                className={inputGroupClasses}
                                type="email"
                                name="email"
                                placeholder="Enter your cellphone number" />
                        </div>
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
const inputGroupClasses = `
        border rounded px-5 py-2 mb-2 w-full focus:border-4 focus:border-teal-500 focus:outline-none
`
const errorClasses = `
        error text-center text-red-700 h-5
    `

export default PersonalDetails
