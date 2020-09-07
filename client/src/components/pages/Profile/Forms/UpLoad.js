import React from 'react'

const UpLoad = () => {
    return (
        <div>
            <header>
                <h2 className="text-2xl mb-1">Personal Details</h2>
            </header>
            <form className="mt-5">
                <div className="mb-3">
                    <input type="file" />
                </div>
                <div>
                    <button className="rounded border py-1 px-3" type="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default UpLoad
