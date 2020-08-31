import React from 'react';
import ProfileEditBtn from '../../../UI/ProfileEditBtn/ProfileEditBtn';

const PersonalDetails = ({ profile }) => {
    return (
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
                <ProfileEditBtn to="/profile/personal-details" />
            </div>
        </div >
    )
}

export default PersonalDetails;
