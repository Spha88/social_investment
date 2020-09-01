import React, { useState } from 'react';
import ProfileEditBtn from '../../../UI/ProfileEditBtn/ProfileEditBtn';
import DropDownToggle from '../../../UI/DropDownToggle';

const EmployerDetails = ({ profile }) => {

    const [open, setOpen] = useState(false);

    const openDetails = () => setOpen(!open);

    return (
        <div className="border rounded mt-5">

            <header onClick={openDetails}
                className="flex justify-between cursor-pointer px-10 py-5 hover:bg-blue-100 border-b">
                <h3 className="text-2xl font-light">
                    Employer Details
                </h3>
                <DropDownToggle open={open} click={openDetails} />
            </header>

            <div className={`${!open ? 'hidden' : 'block'} px-10 py-5`}>
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
                    <ProfileEditBtn to="/profile/employer-details" />
                </div>
            </div>
        </div>
    )
}

export default EmployerDetails;
