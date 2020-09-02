import React, { useState } from 'react';
import ProfileEditBtn from '../../../UI/ProfileEditBtn/ProfileEditBtn';
import DropDownToggle from '../../../UI/DropDownToggle';

const BankingDetails = ({ profile }) => {
    const [open, setOpen] = useState(false);

    const openDetails = () => setOpen(!open);

    return (
        <div className="border rounded mt-5">

            <header onClick={openDetails}
                className="flex justify-between cursor-pointer px-10 py-5 hover:bg-blue-100 border-b">
                <h3 className="text-2xl font-light">
                    Banking Details
                </h3>
                <DropDownToggle open={open} click={openDetails} />
            </header>

            <main className={`${!open ? 'hidden' : 'block'} px-10 py-5`} >
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
                <div className="flex justify-end">
                    <ProfileEditBtn to="profile/banking-details" />
                </div>
            </main>
        </div>
    )
}

export default BankingDetails;
