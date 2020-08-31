import React from 'react';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';

const UpdateMessage = ({ message, updating, error }) => {
    return (
        <div className="h-12 mb-2 text-center">
            {/** Message will show when updating is complete, red if updating was unsuccessful */}
            {message &&
                <p className={`m-0 bg-red-200 p-3 ${error ? 'bg-red-200' : 'bg-blue-200'}  block rounded`}>
                    {message}
                </p>
            }

            {/** This spinner will show while updating */}
            {updating && <SpinnerSmall />}
        </div>
    )
}

export default UpdateMessage
