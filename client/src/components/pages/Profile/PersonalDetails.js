import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateProfile } from '../../../store/actions/index';

const PersonalDetails = ({ updateProfile, profile }) => {
    const { register, handleSubmit, errors } = useForm();
    const submit = data => {
        updateProfile(data);
        // console.log(data)
    };


    return (
        <div className="px-10">
            <header>
                <h2 className="text-2xl mb-5">Personal Details</h2>
            </header>
            <form onSubmit={handleSubmit(submit)}>
                <div className="mb-5">
                    <div className={labelInputContClasses} >
                        <label className={labelClasses} htmlFor="name">Name</label>
                        <input
                            className={inputClasses} type="text" name="name" placeholder="Enter your name"
                            defaultValue={profile && profile.name}
                            ref={register({
                                required: 'Please enter your name'
                            })}
                        />
                    </div>
                    <div className={errorClasses}>{errors.name && errors.name.message}</div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="surname">Surname</label>
                        <input
                            className={inputClasses} type="text" name="surname" placeholder="Enter your surname"
                            defaultValue={profile && profile.surname}
                            ref={register({
                                required: 'Please enter your Surname'
                            })}
                        />
                    </div>
                    <div className={errorClasses}>{errors.surname && errors.surname.message}</div>
                </div>

                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="idNumber">SA ID No.</label>
                        <input
                            className={inputClasses} type="number" name="idNumber" placeholder="ID Number"
                            defaultValue={profile && profile.idNumber}
                            ref={register({
                                required: 'Please enter your SA ID. Number'
                            })}
                        />
                    </div>
                    <div className={errorClasses}>{errors.idNumber && errors.idNumber.message}</div>
                </div>

                {/** Cellphone Number */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="mobileNumber">Cell Phone</label>
                        <input
                            className={inputClasses} type="tel" name="mobileNumber" placeholder="Enter your cellphone number"
                            defaultValue={profile && profile.mobileNumber}
                            ref={register({
                                required: 'Please enter your cell or tel. number'
                            })}
                        />
                    </div>
                    <div className={errorClasses}>{errors.mobileNumber && errors.mobileNumber.message}</div>
                </div>

                {/** Email  */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="email">Email</label>
                        <input
                            className={inputClasses} type="email" name="email" placeholder="Enter email address"
                            defaultValue={profile && profile.email}
                            ref={register}
                        />
                    </div>
                    <div className={errorClasses}>{errors.email && errors.email.message}</div>
                </div>

                {/** Address */}
                <div className="mb-5">
                    <div className={labelInputContClasses}>
                        <label className={labelClasses} htmlFor="address">Address</label>
                        <div className="w-3/4">
                            <input
                                className={inputGroupClasses}
                                type="text"
                                name="address[street]"
                                placeholder="House No. and street name"
                                defaultValue={profile && profile.address.street}
                                ref={register}
                            />
                            <input
                                className={inputGroupClasses}
                                type="text"
                                name="address[city]"
                                placeholder="Town or City"
                                defaultValue={profile && profile.address.city}
                                ref={register}
                            />
                            <input
                                className={inputGroupClasses}
                                type="text"
                                name="address[province]"
                                placeholder="Province"
                                defaultValue={profile && profile.address.province}
                                ref={register}
                            />
                            <input
                                className={inputGroupClasses}
                                type="number"
                                name="address[postalCode]"
                                placeholder="Postal Code"
                                defaultValue={profile && profile.address.postalCode}
                                ref={register}
                            />
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
const mapStateToProps = state => ({
    profile: state.profile.profile
})

export default connect(mapStateToProps, { updateProfile })(PersonalDetails)
