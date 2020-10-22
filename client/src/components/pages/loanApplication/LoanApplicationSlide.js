import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import classes from './LoanApplicationSlide.module.scss';

import { connect } from 'react-redux';
import { applyForLoan } from '../../../store/actions/loanApplicationAction';

import Container from '../../UI/Container';
import { dragSlide, addAmount, subtractAmount } from '../../../utilities/utilities';
import MinusSign from '../../UI/SVG/MinusSign';
import PlusSign from '../../UI/SVG/PlusSign';
import SlideHandler from '../../UI/SVG/SlideHandler';
import Slide from '../../../utilities/Slide';
import Loan from '../../../utilities/LoanCalculator';
import SpinnerSmall from '../../UI/SpinnerSmall/SpinnerSmall';

const LoanApplicationSlide = ({ applyForLoan, applying, message }) => {
    const maxAmount = 4000;
    const minAmount = 500;
    const scrollHandle = useRef();
    const periodSlide = useRef();
    const [amount, setAmount] = useState(4000);
    const [period, setPeriod] = useState(15);

    // invoked by click on apply button
    const loanApplication = () => {
        {/** 
            The loan amount and period are sent to the backend,
            The interest, due date, settlement amount will then be calculated and
            stored in the data base. 
        */}
        applyForLoan(amount, Math.round(period));
    }

    // This class controls the period slide selector and period
    const slide = new Slide(periodSlide.current, period, setPeriod);
    slide.init(period);

    /**
     * Calculates the settlement dates, settlement amount, interest and fees amount
     * when the loan amount or period is changed
     */
    let loan = new Loan(amount, period, 0.10);

    useEffect(() => {
        {/** 
            The amount slide and amount are controlled by this function
        */}
        dragSlide(scrollHandle.current, minAmount, maxAmount, setAmount);

    }, [amount, minAmount, maxAmount, period])

    return (
        <Container>
            <section className={classes.LoanApplicationSlide}>
                <header className="p-10">
                    <h3 className="text-4xl text-center">Apply For a Loan</h3>

                    <div className="flex justify-center">
                        {/** Show spinner why loan application is in progress */}
                        {applying && <SpinnerSmall />}
                    </div>

                    {/** Message displays when loan application is successful */}
                    {message && (
                        <div className="flex justify-center mt-3 mx-auto rounded border p-5 w-1/2 ">
                            <h2 className="text-2xl text-teal-500 bold">{message}</h2>
                        </div>
                    )}

                </header>
                <main>
                    <div className={classes.LoanDetails}>
                        <div className={classes.AmountAndPeriod}>
                            <div className={classes.Details}>
                                <h5>Loan Amount </h5>
                                <h3>R {amount.toLocaleString()}</h3>
                            </div>
                            <div className={classes.Details}>
                                <h5>Loan Period</h5>
                                <h3>{Math.round(period)} <span>Days</span></h3>
                            </div>
                        </div>


                        <div className={classes.Payment}>
                            <div>
                                <h2>{moment().add(period, 'day').format('DD MMMM')}</h2>
                                <p className="text-sm font-bold">Settlement Date</p>
                            </div>
                            <div>
                                <h2>R {(Math.round((amount + loan.fees()) * 100) / 100).toFixed(2)}</h2>
                                <p className="text-sm font-bold">Settlement amount</p>
                            </div>
                            <div>
                                <h2>R {(Math.round(loan.fees() * 100) / 100).toFixed(2)}</h2>
                                <p className="text-sm font-bold">Interest and fees</p>
                            </div>
                        </div>

                        <div className={classes.ApplyBtnContainer}>
                            <button onClick={loanApplication}>
                                Apply
                            </button>
                        </div>

                    </div>

                    <div className={classes.SlideContainer}>

                        <h3 className="text-center mb-2 text-lg font-bold">Select your amount</h3>

                        <div className={classes.Slide}>

                            <div className={classes.PlusSign} onClick={(e) => subtractAmount(e, amount, minAmount, maxAmount, setAmount)}>
                                <MinusSign />
                            </div>

                            <div className={classes.Slider}>
                                <div className={classes.MoneyBar} style={{ width: `${100}%` }}>
                                    <div className={classes.SlideHandle} ref={scrollHandle}>
                                        <SlideHandler />
                                    </div>
                                </div>
                            </div>

                            <div className={classes.PlusSign} onClick={(e) => addAmount(e, amount, minAmount, maxAmount, setAmount)}>
                                <PlusSign />
                            </div>

                        </div>
                    </div>

                    <div className={classes.SlideContainer}>
                        <h3 className="text-center mb-2 text-lg font-bold">Select Period</h3>
                        <div className={classes.Slide} ref={periodSlide}>

                            <div className={classes.PlusSign}>
                                <MinusSign />
                            </div>

                            <div className={classes.Slider}>
                                <div className={classes.MoneyBar}>
                                    <div className={classes.SlideHandle}>
                                        <SlideHandler />
                                    </div>
                                </div>
                            </div>

                            <div className={classes.PlusSign}>
                                <PlusSign />
                            </div>
                        </div>
                    </div>
                </main>

            </section>
        </Container>
    )
}

const mapStateToProps = state => ({
    applying: state.loan.applying,
    message: state.loan.message
})

export default connect(mapStateToProps, { applyForLoan })(LoanApplicationSlide);
