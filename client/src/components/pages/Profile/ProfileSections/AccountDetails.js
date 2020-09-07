import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

const AccountDetails = ({ loan }) => {
    console.log(loan);
    return (
        <div className="rounded">
            <header
                className="cursor-pointer px-10 py-10 hover:bg-blue-100 border rounded mb-8">
                <h2 className="text-2xl font-light">
                    According to your credit score you can borrow R5000
                    <br />
                    <Link to="/apply"
                        className="bg-teal-500 rounded text-white px-8 py-1 mt-5 inline-block text-xl hover:bg-teal-800">
                        Apply Now</Link>
                </h2>
            </header>

            <div className="border rounded">
                <header
                    className="flex justify-between cursor-pointer px-10 py-5 hover:bg-blue-100 border-b">
                    <h3 className="text-2xl font-light">
                        Loan Details
                </h3>
                </header>
                <main className={`block px-8 py-5`}>
                    <ul className=" divide-y divide-gray-400">
                        <li className="flex items-stretch py-3 px-3 hover:bg-gray-100">
                            <div className="w-1/2">
                                Issued On
                            </div>
                            <div className="w-1/2">
                                {moment(loan.applicationDate).format('DD MMMM YYYY')}
                            </div>
                        </li>
                        <li className="flex items-stretch py-3 px-3 hover:bg-gray-100">
                            <div className="w-1/2">
                                Principle Amount
                            </div>
                            <div className="w-1/2">
                                R {loan.amount}
                            </div>
                        </li>

                        <li className="flex items-stretch py-3 px-3 hover:bg-gray-100">
                            <div className="w-1/2">
                                Period
                            </div>
                            <div className="w-1/2">
                                {loan.term} days
                            </div>
                        </li>

                        <li className="flex items-stretch py-3 px-3 hover:bg-gray-100">
                            <div className="w-1/2">
                                Fees and Interest
                            </div>
                            <div className="w-1/2">
                                R {loan.initiationFee + loan.vat + loan.interestAmount}
                            </div>
                        </li>

                        <li className="flex items-stretch py-3 px-3 hover:bg-gray-100">
                            <div className="w-1/2">
                                Amount Due
                            </div>
                            <div className="w-1/2">
                                R {loan.totalRepayment}
                            </div>
                        </li>

                        <li className="flex items-stretch py-3 px-3 hover:bg-gray-100">
                            <div className="w-1/2">
                                Due Date
                            </div>
                            <div className="w-1/2">
                                {moment(loan.paymentDate).format('DD MMMM YYYY')}
                            </div>
                        </li>
                    </ul>
                </main>
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    loan: state.profile.loan
})

export default connect(mapStateToProps)(AccountDetails);
