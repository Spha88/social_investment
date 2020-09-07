import React from 'react';
import classes from './home.module.scss';
import moneyImg from '../../../assets/images/money.png';
import freedomImg from '../../../assets/images/freedom.png';
import { Link } from 'react-router-dom';
import Circles from '../../UI/Circles/Circles';

const Home = () => {
    return (
        <div className={`${classes.Home} container`}>
            <div className={`${classes.FinancialAssistance}`}>
                <div className={classes.HomeParagraph}>
                    <h2><span>Your</span><br /> financial assistance</h2>
                    <p>
                        For easy finance when you need it, a few clicks away, transparent, easy to use and repayment made easy through bank debit orders
                    </p>
                    <div className={classes.ButtonContainer}>
                        <Link to="apply">
                            <button>Apply Now</button>
                        </Link>
                    </div>
                </div>
                <div className={classes.HomeImage}>
                    <Circles />
                </div>
            </div>

            <div className={`${classes.FinancialFreedom}`}>

                <div className={classes.Image}>
                    <img src={freedomImg} alt="Landing" />
                </div>
                <div className={classes.HomeParagraph}>
                    <h2><span>Financial</span> Freedom</h2>
                    <p>
                        Celiac subway tile messenger bag sriracha hexagon. Raw denim tumeric 3 wolf moon locavore mustache. Hashtag tumblr flexitarian.
                </p>
                    <Link to="apply-slide">
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
