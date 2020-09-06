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

const LoanApplicationSlide = ({ applyForLoan, applying }) => {
    const maxAmount = 4000;
    const minAmount = 500;
    const scrollHandle = useRef();
    const periodSlide = useRef();
    const [amount, setAmount] = useState(4000);
    const [period, setPeriod] = useState(15);

    const slide = new Slide(periodSlide.current, period, setPeriod);
    slide.init(period);

    const loan = new Loan(amount, period, 0.10);

    const loanApplication = () => {
        applyForLoan(amount, period);
    }

    useEffect(() => {
        dragSlide(scrollHandle.current, minAmount, maxAmount, setAmount);
    }, [amount, minAmount, maxAmount])

    return (
        <Container>
            <section className={classes.LoanApplicationSlide}>
                <header className="p-10">
                    <h3 className="text-4xl text-center">Apply For a Loan</h3>

                    {/** Show spinner why loan application is in progress */}
                    {applying && <SpinnerSmall />}
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
                                <h2>{moment().add(period, 'day').format('dd DD MMMM')}</h2>
                                <p className="text-sm">Settlement Date</p>
                            </div>
                            <div>
                                <h2>R {(Math.round((amount + loan.fees()) * 100) / 100).toFixed(2)}</h2>
                                <p className="text-sm">Settlement amount</p>
                            </div>
                            <div>
                                <h2>R {(Math.round(loan.fees() * 100) / 100).toFixed(2)}</h2>
                                <p className="text-sm">Interest and fees</p>
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
    applying: state.loan.applying
})

export default connect(mapStateToProps, { applyForLoan })(LoanApplicationSlide);
