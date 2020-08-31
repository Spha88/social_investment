import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="container relative mx-auto mt-10 mb-10">
            <div className="bg-white rounded shadow-xl p-5">
                {children}
            </div>
        </div>
    )
}

export default Container
