import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="bg-white rounded shadow-xl py-10">
                {children}
            </div>
        </div>
    )
}

export default Container
