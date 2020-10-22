import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../../store/actions/index';

import Container from '../../UI/Container';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';
import Home from '../home/Home';

const Signup = ({ signup, signingUp, signedUp, signUpError, signUpErrorMessage }) => {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    useEffect(() => {
        signedUp && history.push('/profile');
        // eslint-disable-next-line 
    }, [signedUp])

    const inputClasses = `w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2`

    return (
        <>
            <Container>
                {/** Spinner displays while making an http request to add loan */}
                {signingUp && (
                    <div className="absolute flex justify-center border inset-0 h-full w-full bg-white bg-opacity-75 p-5">
                        <SpinnerSmall />
                    </div>
                )}

                <header className="flex flex-col text-center w-full mb-2">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">Sign Up</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed">
                        or <Link to="/login"><span className="text-teal-300">Log in</span></Link>
                    </p>
                </header>

                <main className="lg:w-1/3 md:w-2/5 sm:w-1/1 mx-auto pb-6">

                    {/* Display message after adding a loan for 3 seconds */}
                    <div className={`w-full h-8 ${signUpError && 'bg-red-500'} text-white text-center text-sm rounded p-2 px-8 mb-2`}>
                        {signUpError && signUpErrorMessage}
                    </div>

                    <form className="flex flex-wrap -m-2" onSubmit={handleSubmit(signup)}>

                        <div className="p-2 w-full">
                            <input name="email" placeholder="Email" type="text"
                                className={inputClasses}
                                ref={register({ required: 'Enter your email.' })}
                            />
                            {/** Error message */}

                            <div className="text-red-500 text-sm pl-5 h-3">{errors.email && errors.email.message}</div>

                        </div>

                        <div className="p-2 w-full">
                            <input name="password" placeholder="Password"
                                className={inputClasses}
                                ref={register({ required: 'Password is required' })}
                            />
                            {/** Error message */}
                            <div className="text-red-500 text-sm pl-5 h-3">{errors.password && errors.password.message}</div>

                        </div>

                        <div className="p-2 w-full text-center">
                            <button className="text-white bg-teal-800 border-0 py-1 px-8 focus:outline-none hover:bg-teal-600 rounded">Sign Up</button>
                        </div>
                    </form>
                </main>
            </Container>

            <Home />

        </>
    )
}

const mapStateToProps = state => ({
    signingUp: state.auth.signingUp,
    signedUp: state.auth.signedUp,
    signUpError: state.auth.signUpError,
    signUpErrorMessage: state.auth.singUpErrorMessage
})

export default connect(mapStateToProps, { signup })(Signup);
