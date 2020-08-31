import React from 'react';
import ProfileEditBtn from '../../../UI/ProfileEditBtn/ProfileEditBtn';

const BankingDetails = ({ profile }) => {
    return (
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
                <ProfileEditBtn to="profile/banking-details" />
            </div>
        </div >
    )
}

export default BankingDetails;
