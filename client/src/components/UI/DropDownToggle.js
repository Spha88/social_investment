import React from 'react'

const DropDownToggle = ({ open, click }) => {
    return (
        <div onClick={() => click()} className="cursor-pointer inline">
            {!open ?
                (
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                )
                : (
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                )
            }
        </div>
    )
}

export default DropDownToggle
