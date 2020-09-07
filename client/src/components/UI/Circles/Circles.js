import React from 'react';
import blueCircle from '../../../assets/images/bluecircle.svg';
import redCircle from '../../../assets/images/redcircle.svg';
import moneyCircle from '../../../assets/images/moneyimage.svg';

import classes from './Circle.module.scss';

const Circles = () => {
    return (
        <div className={classes.Circles}>
            <img className={classes.CircleOne} src={blueCircle} alt="animated circle 1" />
            <img className={classes.CircleTwo} src={moneyCircle} alt="animated circle 2" />
            <img className={classes.CircleThree} src={redCircle} alt="animated circle 3" />
        </div>
    )
}

export default Circles
