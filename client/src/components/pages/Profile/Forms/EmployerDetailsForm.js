import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { updateProfile, cleanUp } from '../../../../store/actions/index';
import industries from '../../../../assets/lists/listOfIndustries';
import UpdateMessage from '../../../UI/UpdateMessage/UpdateMessage';

const EmployerDetails = ({ updateProfile, cleanUp, employer, error, message, updating }) => {
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {

        return cleanUp();
        // eslint-disable-next-line
    }, [])

    const submit = data => {
        data = { employer: data }
        updateProfile(data);
    };

    const years = [];
    for (let i = 0; i < 61; i++) {
        years.push(<option key={i} value={i}>{i + ' Years'}</option>);
    }

    const months = [];
    for (let i = 1; i < 13; i++) {
        months.push(<option key={i} value={i}>{i + ' Months'}</option>)
    }


    return (
        <div>
            <header>
                <h2 className="text-2xl mb-1">Details of Employer</h2>
            </header>

            {/** Display spinner when updating and update message when done */}
            <UpdateMessage message={message} error={error} updating={updating} />

            <form onSubmit={handleSubmit(submit)}>

                {/** Name of employer */}
                <div className="mb-5">
                    <div className={labelInputContClasses} >
                        <label className={labelClasses} htmlFor="employerName">Name of Employer</label>
                        <input
                            className={inputClasses} type="text" name="employerName"
                            placeholder="Enter your employer's name"
                            defaultValue={employer && employer.employerName}
                            ref={register({
                                required: 'Please fill in name of employer'
                            })} />
                    </div>
                    <div className={errorClasses}>
                        {errors.employerName && errors.employerName.message}
                    </div>
                </div>

                {/** Industry */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="industry">Industry</label>
                        <select
                            className={inputClasses} type="text" name="industry" placeholder="Select industry"
                            defaultValue={employer && employer.industry}
                            ref={register({
                                required: 'Select industry'
                            })}
                        >
                            <option value="">Select your industry</option>
                            {/** List of industries, I have to store this list in a DB in future */}
                            {industries.map(industry => (
                                <option key={industry.code} value={industry.description}>{industry.description}</option>
                            ))}
                        </select>
                    </div>
                    <div className={errorClasses}>{errors.industry && errors.industry.message}</div>
                </div>

                {/** Status of employment */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="statusOfEmployment">Status of Employment</label>
                        <select
                            className={inputClasses} name="statusOfEmployment"
                            defaultValue={employer && employer.statusOfEmployment}
                            ref={register({
                                required: 'Select employment status'
                            })}
                        >
                            <option value="">Select employment status</option>
                            <option value="full time">Full time employee</option>
                            <option value="contract">Contract Employee</option>
                        </select>
                    </div>
                    <div className={errorClasses}>
                        {errors.statusOfEmployment && errors.statusOfEmployment.message}
                    </div>
                </div>

                {/** Work contact number */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="workContactNumber">Work Contact Number</label>
                        <input
                            className={inputClasses} type="text" name="workContactNumber" placeholder="Enter work telephone number"
                            defaultValue={employer && employer.workContactNumber}
                            ref={register({
                                required: 'Fill in your work contact number'
                            })}
                        />
                    </div>
                    <div className={errorClasses}>
                        {errors.workContactNumber && errors.workContactNumber.message}
                    </div>
                </div>

                {/** Gross Monthly Income */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="grossMonthlyIncome">Gross Monthly Income</label>
                        <input
                            className={inputClasses} type="number" name="grossMonthlyIncome" placeholder="Enter gross monthly income"
                            defaultValue={employer && employer.grossMonthlyIncome}
                            ref={register({
                                required: 'Enter your gross monthly income'
                            })}
                        />
                    </div>
                    <div className={errorClasses}>
                        {errors.grossMonthlyIncome && errors.grossMonthlyIncome.message}
                    </div>
                </div>

                {/** Net Monthly Income */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="netMonthlyIncome">Net Monthly Income</label>
                        <input
                            className={inputClasses} type="number" name="netMonthlyIncome" placeholder="Enter your net monthly income"
                            defaultValue={employer && employer.netMonthlyIncome}
                            ref={register({
                                required: 'Enter your net monthly income'
                            })}
                        />
                    </div>
                    <div className={errorClasses}></div>
                </div>

                {/** Frequency of Income */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="incomeFrequency">Frequency of Income</label>
                        <select
                            className={inputClasses} type="number" name="incomeFrequency" placeholder="Select Frequency of income"
                            defaultValue={employer && employer.incomeFrequency}
                            ref={register({
                                required: 'Select your income frequency'
                            })}
                        >
                            <option value="">Select frequency of payment</option>
                            <option value="monthly">Monthly</option>
                            <option value="twice monthly">Twice Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="bi weekly">Bi-weekly</option>
                            <option value="last-day-month">Last day of month</option>
                            <option value="last-friday-month">Last Friday of month</option>
                            <option value="twice-monthly-15-30">Twice monthly 15th and 30th</option>
                        </select>
                    </div>
                    <div className={errorClasses}>
                        {errors.incomeFrequency && errors.incomeFrequency.message}
                    </div>
                </div>

                {/** Salary Day */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="salaryDay">Salary Day</label>
                        <input
                            className={inputClasses} type="number" name="salaryDay" placeholder="Enter payment date of salary"
                            defaultValue={employer && employer.salaryDay}
                            ref={register({
                                required: 'Select your day of salary',
                                min: { value: 1, message: 'Salary day can be from 1st to 31st of a month' },
                                max: { value: 31, message: 'Day out of range, salary day can be 1st to 31st' }
                            })}
                        />
                    </div>
                    <div className={errorClasses}>
                        {errors.salaryDay && errors.salaryDay.message}
                    </div>
                </div>

                {/** Position */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="position">Position</label>
                        <input
                            className={inputClasses} type="text" name="position" placeholder="Enter your position at work"
                            defaultValue={employer && employer.position}
                            ref={register({
                                required: 'Please fill in your position',
                                maxLength: { value: 50, message: 'Position too long' }
                            })}
                        />
                    </div>
                    <div className={errorClasses}>
                        {errors.position && errors.position.message}
                    </div>
                </div>

                {/** Time at current employer */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="years">Time at current employer</label>
                        <div className="w-3/4">
                            <select
                                className={inputGroupClasses}
                                type="number"
                                name="timeAtCurrentEmployer[years]"
                                placeholder="Enter number of years working"
                                defaultValue={employer && employer.timeAtCurrentEmployer.years}
                                ref={register({
                                    required: 'Please select number of years',
                                    max: { value: 60, message: "Invalid value" }
                                })}
                            >
                                <option value="">Number of years</option>
                                {/** Render 'number Years' defined above */}
                                {years}
                            </select>
                            <div className={`${errorClasses} mb-2 block`}>
                                {errors.years && errors.years.message}
                            </div>
                            <select
                                className={inputGroupClasses}
                                type="number"
                                name="timeAtCurrentEmployer[months]"
                                placeholder="Enter number of months working"
                                defaultValue={employer && employer.timeAtCurrentEmployer.months}
                                ref={register({
                                    required: 'Select number of months',
                                    max: { value: 12, message: "Select from 1 to 12 months" }
                                })}
                            >
                                <option value="">Number of months</option>
                                {months}
                            </select>
                        </div>
                    </div>
                    <div className={errorClasses}>
                        {errors.months && errors.months.message}
                    </div>
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
        border rounded px-5 py-2 mb-0 w-full focus:border-4 focus:border-teal-500 focus:outline-none
`
const errorClasses = `
        error text-center text-red-700 h-5 text-sm
    `
const mapStateToProps = state => ({
    employer: state.profile.profile.employer,
    error: state.profile.error,
    message: state.profile.message,
    updating: state.profile.updating
})
export default connect(mapStateToProps, { updateProfile, cleanUp })(EmployerDetails);
