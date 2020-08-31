import React from 'react';
import { Link } from 'react-router-dom';

const ProfileEditBtn = ({ to }) => <Link
    to={to}
    className="rounded bg-teal-500 px-5 py-1 text-white hover:bg-teal-800">
    Edit
</Link>

export default ProfileEditBtn
