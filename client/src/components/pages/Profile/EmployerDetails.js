import React from 'react';
import { useForm } from 'react-hook-form';

import industries from './listOfIndustries';

const EmployerDetails = () => {
    const { register, handleSubmit } = useForm();
    const submit = data => console.log(data);

    const years = [];
    for (let i = 0; i < 60; i++) {
        years.push(<option key={i} value={i + ' years'}>{i + ' Years'}</option>);
    }

    const months = [];
    for (let i = 1; i < 13; i++) {
        months.push(<option key={i} value={i + ' months'}>{i + 'Months'}</option>)
    }


    return (
        <div className="px-10">
            <header>
                <h2 className="text-2xl mb-5">Details of Employer</h2>
            </header>
            <form onSubmit={handleSubmit(submit)}>
                <div className="mb-5">
                    <div className={labelInputContClasses} >
                        <label className={labelClasses} htmlFor="employer-name">Name of Employer</label>
                        <input className={inputClasses} ref={register} type="text" name="employer-name" placeholder="Enter your employer's name" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="industry">Industry</label>
                        <select className={inputClasses} ref={register} type="text" name="industry" placeholder="Select industry">
                            <option>Select your industry</option>
                            {/** List of industries, I have to store this list in a DB in future */}
                            {industries.map(industry => (
                                <option key={industry.code} value={industry.description}>{industry.description}</option>
                            ))}
                        </select>
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="employment-status">Status of Employment</label>
                        <select className={inputClasses} ref={register} name="employment-status" id="employment-status">
                            <option value="">Select employment status</option>
                            <option value="full time">Full time employee</option>
                            <option value="contract">Contract Employee</option>
                        </select>
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="employment-status">Work Contact Number</label>
                        <input className={inputClasses} ref={register} type="text" name="employment-status" placeholder="Enter work telephone number" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="gross-income">Gross Monthly Income</label>
                        <input className={inputClasses} ref={register} type="number" name="gross-income" placeholder="Enter gross monthly income" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="net-income">Net Monthly Income</label>
                        <input className={inputClasses} ref={register} type="number" name="net-income" placeholder="Enter your net monthly income" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="net-income">Frequency of Income</label>
                        <select className={inputClasses} ref={register} type="number" name="net-income" placeholder="Select Frequency of income">
                            <option>Select frequency of payment</option>
                            <option value="monthly">Monthly</option>
                            <option value="twice monthly">Twice Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="bi weekly">Bi-weekly</option>
                            <option value="last-day-month">Last day of month</option>
                            <option value="last-friday-month">Last Friday of month</option>
                            <option value="twice-monthly-15-30">Twice monthly 15th and 30th</option>
                        </select>
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="net-income">Salary Day</label>
                        <input className={inputClasses} ref={register} type="number" name="net-income" placeholder="Enter payment date of salary" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="position">Position</label>
                        <input className={inputClasses} ref={register} type="text" name="position" placeholder="Enter your position at work" />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="name">Time at current employer</label>
                        <div className="w-3/4">
                            <select
                                className={inputGroupClasses}
                                ref={register}
                                type="number"
                                name="years-working"
                                placeholder="Enter number of years working">
                                <option value="">Number of years</option>
                                {/** Render 'number Years' defined above */}
                                {years}
                            </select>
                            <select
                                className={inputGroupClasses}
                                ref={register}
                                type="number"
                                name="months-working"
                                placeholder="Enter number of months working" >
                                <option value="">Number of months</option>
                                {months}
                            </select>
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

export default EmployerDetails;
