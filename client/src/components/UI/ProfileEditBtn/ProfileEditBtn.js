import React from 'react';
import { Link } from 'react-router-dom';

const ProfileEditBtn = ({ to }) => (<Link
    to={to}
    className="fex justify-between items-center h-10 rounded bg-teal-500 px-5 py-2 text-white hover:bg-teal-800">
    <span className="inline-block mr-2">Edit</span>
    <svg className="inline-block" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
</Link>

)

export default ProfileEditBtn
