import React, { useState, useEffect, useRef } from 'react';
import classes from './LoanApplicationSlide.module.scss';
import Container from '../../UI/Container';
import { round, clearSelection } from '../../../utilities/utilities';
import MinusSign from '../../UI/SVG/MinusSign';
import PlusSign from '../../UI/SVG/PlusSign';
import SlideHandler from '../../UI/SVG/SlideHandler';

const LoanApplicationSlide = () => {
    const maxAmount = 4000;
    const minAmount = 300;
    const scrollHandle = useRef();
    const [amount, setAmount] = useState(4000);

    const addAmount = (e) => {
        e.preventDefault();

        if (amount >= maxAmount) {
            return setAmount(maxAmount);
        }

        const slideBar = e.currentTarget.previousElementSibling.firstElementChild;
        const slide = e.currentTarget.previousElementSibling;

        const slideBarWidth = Math.floor(((amount + 10) / maxAmount) * slide.offsetWidth);
        slideBar.style.width = slideBarWidth + "px";

        setAmount(amount + 10);

        clearSelection();
    }

    const subtractAmount = (e) => {
        e.preventDefault();

        const slideBar = e.currentTarget.nextElementSibling.firstElementChild;
        const slide = e.currentTarget.nextElementSibling;

        const slideBarWidth = Math.floor(((amount - 10) / maxAmount) * slide.offsetWidth);
        slideBar.style.width = slideBarWidth + "px";

        setAmount(amount - 10);

        if (amount <= minAmount) {
            setAmount(minAmount);
        }
    }

    const dragSlideHandle = (element, amount, maxAmount, setAmount) => {

        const slideBar = element.parentElement;
        const slide = element.parentElement.parentElement;

        // slideBar min width in pixels;
        const slideBarMinWidth = Math.ceil((minAmount / maxAmount) * slide.offsetWidth);

        let pos1 = 0, pos2 = 0;

        const closeDragElement = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        const elementDrag = e => {
            e.preventDefault();

            // calculate the horizontal movement from initial position of mouse(pos1)
            pos2 = pos1 - e.clientX;

            // update initial position
            pos1 = e.clientX;

            // calculate current amount based on the width of the slide bar 
            let currentAmount = maxAmount * ((slideBar.offsetWidth) / slide.offsetWidth);

            /**
             *  Round to the nearest R10, if currentAmount > maxAmount return maxAmount.
             *  if current amount is < min amount return minAmount.
             */
            setAmount(round(currentAmount, 10, minAmount, maxAmount));


            if (slideBar.offsetWidth < slide.offsetWidth && slideBar.offsetWidth > slideBarMinWidth - 1) {
                // Between full length and 60 witch is just less than the toggle size;
                slideBar.style.width = (slideBar.offsetWidth - pos2) + "px";

            } else if (slideBar.offsetWidth > slide.offsetWidth) {
                // At the end of the bar or full bar;

                slideBar.style.width = slide.offsetWidth + "px";

                closeDragElement();

            } else if (slideBar.offsetWidth < slideBarMinWidth) {
                // if its less than 60
                slideBar.style.width = slideBarMinWidth + "px";

                closeDragElement();

            } else if (slideBar.offsetWidth === slide.offsetWidth) {
                slideBar.style.width = (slideBar.offsetWidth - pos2) + "px";
            }
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
        dragSlideHandle(scrollHandle.current, amount, maxAmount, setAmount);
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
                            <div className={classes.PlusSign}
                                onClick={subtractAmount}
                            >
                                <MinusSign />
                            </div>
                            <div className={classes.Slider}>
                                <div className={classes.MoneyBar} style={{ width: `${100}%` }}>
                                    <div className={classes.SlideHandle} ref={scrollHandle}>
                                        <SlideHandler />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.PlusSign}
                                onClick={addAmount}
                            >
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
