import React, { useState, useEffect, useRef } from 'react';
import classes from './LoanApplicationSlide.module.scss';
import Container from '../../UI/Container';
import { dragSlide, addAmount, subtractAmount } from '../../../utilities/utilities';
import MinusSign from '../../UI/SVG/MinusSign';
import PlusSign from '../../UI/SVG/PlusSign';
import SlideHandler from '../../UI/SVG/SlideHandler';

const LoanApplicationSlide = () => {
    const maxAmount = 4000;
    const minAmount = 500;
    const scrollHandle = useRef();
    const [amount, setAmount] = useState(4000);



    useEffect(() => {
        dragSlide(scrollHandle.current, minAmount, maxAmount, setAmount);
    }, [amount])

    return (
        <Container>
            <section className={classes.LoanApplicationSlide}>
                <header className="p-10">
                    <h3 className="text-2xl text-center">Apply For a Loan</h3>
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
                                <h3>15 <span>Days</span></h3>
                            </div>
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

                        <div className={classes.Slide}>

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

export default LoanApplicationSlide;
