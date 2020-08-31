import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';

const Summary = ({ profile }) => {

    return (
        <div className="px-10">
            <header className="mb-5">
                <h2 className="text-2xl mb-1 pl-10">Summary</h2>
            </header>
            <div className="border rounded px-3 py-10 bg-blue-100 text-center">
                <h2 className="text-2xl font-light">
                    According to your credit score you can borrow R5000
                    <br />
                    <Link to="/apply"
                        className="bg-teal-500 rounded text-white px-8 py-1 mt-5 inline-block text-xl hover:bg-teal-800">
                        Apply Now</Link>
                </h2>
            </div>


            {profile ? (
                <div className="mt-10">
                    <div className="border rounded p-10 pb-5">
                        {/** Personal details */}
                        <h3 className="text-xl mb-4 font-bold">Personal Details</h3>
                        <ul className="text-xl divide-y divide-gray-400">
                            <li className="flex items-stretch mb-3">
                                <div className="w-1/2">
                                    <span className="text-sm">Full Name : </span><br /> {profile.name + ' ' + profile.surname}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >SA ID No.: </span><br /> {profile.idNumber}
                                </div>
                            </li>

                            <li className="flex flex-wrap items-stretch mb-3">
                                <div className="w-full mt-3">
                                    <h2 className="text-sm font-bold">Contact Details</h2>
                                </div>
                                <div className="w-1/2 mb-3 pr-3">
                                    <span className="text-sm">Cell No.: </span><br /> {profile.mobileNumber}
                                </div>
                                <div className="w-1/2 mb-3 pr-3">
                                    <span className="text-sm"> Work Tel: </span><br /> {profile.employer.workContactNumber}
                                </div>
                                <div className="w-1/2 mb-3 pr-3">
                                    <span className="text-sm"> Email: </span><br /> {profile.email}
                                </div>
                                <div className="w-1/2 mb-3 pr-3">
                                    <span className="text-sm"> Physical Address: </span><br />
                                    {profile.address.street} <br />
                                    {profile.address.city} <br />
                                    {profile.address.province} <br />
                                    {profile.address.postalCode}
                                </div>
                            </li>
                        </ul>
                        <div className="text-right">
                            <Link
                                to="/profile/personal-details"
                                className="rounded bg-teal-500 px-5 py-1 text-white hover:bg-teal-800">
                                Edit
                            </Link>
                        </div>
                    </div >

                    <div className="border rounded p-10 pb-5 mt-5">
                        {/** Employment details */}
                        <h3 className="text-xl mb-4 font-bold">Employer Details</h3>
                        <ul className="text-xl divide-y divide-gray-400">
                            <li className="flex flex-wrap items-stretch mb-3">
                                <div className="w-1/2">
                                    <span className="text-sm">Name : </span><br /> {profile.employer.employerName}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Industry: </span><br /> {profile.employer.industry}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Position: </span><br /> {profile.employer.position}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Employment status: </span><br /> {profile.employer.statusOfEmployment}
                                </div>
                            </li>


                            <li className="flex flex-wrap items-stretch mb-3">
                                <div className="w-full mt-3">
                                    <h2 className="text-sm font-bold">Monthly Income</h2>
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm">Gross Salary : </span><br /> {profile.employer.grossMonthlyIncome}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Net Salary: </span><br /> {profile.employer.netMonthlyIncome}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm">Income Frequency : </span><br /> {profile.employer.incomeFrequency}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Salary Day: </span><br /> {profile.employer.salaryDay}
                                </div>
                            </li>

                            <li className="flex flex-wrap items-stretch mb-3">
                                <div className="w-full mt-3">
                                    <h2 className="text-sm font-bold">Contact Details</h2>
                                </div>
                                <div className="w-1/2 mb-3 pr-3">
                                    <span className="text-sm"> Work Tel: </span><br /> {profile.employer.workContactNumber}
                                </div>
                                <div className="w-1/2 mb-3 pr-3">
                                    <span className="text-sm"> Physical Address: </span><br />
                                    {profile.address.street} <br />
                                    {profile.address.city} <br />
                                    {profile.address.province} <br />
                                    {profile.address.postalCode}
                                </div>
                            </li>
                        </ul>
                        <div className="text-right">
                            <Link
                                to="/profile/employer-details"
                                className="rounded bg-teal-500 px-5 py-1 text-white hover:bg-teal-800">
                                Edit
                            </Link>
                        </div>
                    </div >

                    <div className="border rounded p-10 pb-5 mt-5">
                        {/** Employment details */}
                        <h3 className="text-xl mb-4 font-bold">Banking Details</h3>
                        <ul className="text-xl divide-y divide-gray-400">
                            <li className="flex flex-wrap items-stretch mb-3">
                                <div className="w-1/2">
                                    <span className="text-sm">Name : </span><br /> {profile.bankingDetails.bank}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Account Holder: </span><br /> {profile.bankingDetails.accountHolder}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Account number: </span><br /> {profile.bankingDetails.accountNumber}
                                </div>
                                <div className="w-1/2">
                                    <span className="text-sm" >Account type: </span><br /> {profile.bankingDetails.accountType}
                                </div>
                            </li>
                        </ul>
                        <div className="text-right">
                            <Link
                                to="/profile/banking-details"
                                className="rounded bg-teal-500 px-5 py-1 text-white hover:bg-teal-800">
                                Edit
                            </Link>
                        </div>
                    </div >
                </div >

            ) : (
                    <div className="p-10">
                        <SpinnerSmall />
                    </div>
                )

            }



        </div >
    )
}

const mapStateToProps = state => ({
    profile: state.profile.profile
})

export default connect(mapStateToProps)(Summary)
