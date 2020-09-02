import React, { useState } from 'react';
import ProfileEditBtn from '../../../UI/ProfileEditBtn/ProfileEditBtn';
import DropDownToggle from '../../../UI/DropDownToggle';

const PersonalDetails = ({ profile }) => {

    const [open, setOpen] = useState(true);

    const openDetails = () => setOpen(!open);

    return (
        <div className="border rounded">
            <header onClick={openDetails}
                className="flex justify-between cursor-pointer px-10 py-5 hover:bg-blue-100 border-b">
                <h3 className="text-2xl font-light">
                    Personal Details
                </h3>
                <DropDownToggle open={open} click={openDetails} />
            </header>
            <main className={`${!open ? 'hidden' : 'block'} px-10 py-5`}>
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
                <div className="flex justify-end">
                    <ProfileEditBtn to="/profile/personal-details" />
                </div>
            </main>
        </div>
    )
}

export default PersonalDetails;
