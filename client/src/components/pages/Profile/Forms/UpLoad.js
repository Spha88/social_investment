import React, { useState } from 'react';
import axios from '../../../../axios-api';

const UpLoad = () => {

    const [file, setFile] = useState();

    const fileInputChange = e => {
        e.preventDefault()
        setFile(e.target.files[0])
    }

    const submit = e => {
        e.preventDefault()

        // Create form data and add a field with the file in it
        const formData = new FormData();
        formData.append('file', file);

        // send the file to the server
        axios.post('/profile/documents', formData, {})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div>
            <header>
                <h2 className="text-2xl mb-1">Personal Details</h2>
            </header>
            <form className="mt-5" onSubmit={submit}>
                <div className="mb-3">
                    <input type="file" onChange={fileInputChange} />
                </div>
                <div>
                    <button className="rounded border py-1 px-3" type="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default UpLoad
