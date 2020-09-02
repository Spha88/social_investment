import React, { useState, useEffect, useRef } from 'react';
import classes from './LoanApplicationSlide.module.scss';
import Container from '../../UI/Container';

const LoanApplicationSlide = () => {
    const maxAmount = 4000;
    const minAmount = 300;
    const scrollHandle = useRef();
    const [amount, setAmount] = useState(2000);
    // const [period, setPeriod] = useState(15);

    const addAmount = () => {
        if (amount < maxAmount) {
            setAmount(amount + 10);
        }
    }

    const subtractAmount = () => {
        if (amount > minAmount) {
            setAmount(amount - 10)
        }
    }

    const dragSlideHandle = element => {

        const slideBar = element.parentElement;
        const slide = element.parentElement.parentElement;

        console.dir(element)
        console.dir(slideBar.parentElement.parentElement);

        let pos1 = 0, pos2 = 0;

        const closeDragElement = () => {
            console.log('Stop dragging');
            document.onmouseup = null;
            document.onmousemove = null;
            element.style.right = "0";
        }

        const elementDrag = e => {
            e.preventDefault();

            // calculate the horizontal movement from initial position of mouse(pos1)
            pos2 = pos1 - e.clientX;

            // update initial position
            pos1 = e.clientX;


            console.log('Position movement: ' + pos2);
            console.log("Bar width: " + slideBar.offsetWidth + " Bar container width: " + slide.offsetWidth);

            // set amount 
            let currentAmount = maxAmount * (slideBar.offsetWidth / slide.offsetWidth);
            setAmount(Math.floor(currentAmount));



            if (slideBar.offsetWidth < slide.offsetWidth && slideBar.offsetWidth > 60) {
                // Between full length and 60 witch is just less than the toggle size;
                element.style.cssText = `position: absolute ; right:${(element.offsetLeft - pos2)}px;`;
                slideBar.style.width = (slideBar.offsetWidth - pos2) + "px";
            } else if (slideBar.offsetWidth > slide.offsetWidth) {
                // At the end of the bar or full bar;
                console.log('I am here')
                // slideBar.style.width = slide.offsetWidth + "px";
                element.style.cssText = "right: 0; position: relative";

            } else if (slideBar.offsetWidth <= 60 && pos2 < 1) {
                // if its less than 60
                element.style.cssText = `position: absolute ; right:${(element.offsetLeft - pos2)}px;`;
                // slideBar.style.width = (60 - slideBar.offsetWidth + 61) + "px";

            } else if (slideBar.offsetWidth == slide.offsetWidth) {
                slideBar.style.width = (slideBar.offsetWidth - pos2) + "px";
            }

            element.style.right = "0";
        }

        const dragMouseDown = e => {
            e.preventDefault();

            // first position before dragging
            pos1 = e.clientX;

            // Start dragging when the mouse moves
            document.onmousemove = elementDrag;

            // Stop dragging on mouse up
            document.onmouseup = closeDragElement;

        }

        element.addEventListener('mousedown', dragMouseDown);
    }



    useEffect(() => {
        dragSlideHandle(scrollHandle.current);
    }, [])

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
                                <h3>R {amount}</h3>
                            </div>
                            <div className={classes.Details}>
                                <h5>Loan Period</h5>
                                <h3>15 <span>Days</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className={classes.AmountSlide}>
                        <h3>Select your amount</h3>
                        <div className={classes.Slide}>
                            <div className={classes.PlusSign}
                                onClick={subtractAmount}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className={classes.Slider}>
                                <div className={classes.MoneyBar} style={{ width: `${amount / maxAmount * 100}%` }}>
                                    <div className={classes.SlideHandle} ref={scrollHandle}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.PlusSign}
                                onClick={addAmount}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={classes.AmountSlide}>
                        <h3>Select Period</h3>
                        <div className={classes.Slide}>
                            <div className={classes.PlusSign}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className={classes.Slider}>
                                <div className={classes.MoneyBar}>
                                    <div className={classes.SlideHandle}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.PlusSign}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </main>

            </section>
        </Container>
    )
}

export default LoanApplicationSlide;
