import { roundToCurrency } from './utilities';

class Loan {

    constructor(p, days, ipd) {
        this.p = p;
        this.days = days;
        this.ipd = ipd;
        this.initFee = null;
        this.serviceFee = 69.50;
    }

    init = () => {
        this.initiationFee();
        this.vat();
        this.interest();
        this.fees();
    }

    initiationFee = () => {
        let initFee;
        if (this.p > 1000) {
            const amountOverG = (this.p - 1000);
            initFee = (roundToCurrency((1000 * 16.5) / 100) + roundToCurrency((amountOverG * 10) / 100));
        } else {
            initFee = roundToCurrency(this.p * 16.5 / 100);
        }

        // make sure the amount is in two decimal places with a 0 at the end if the number is 100.1 = 100.10;
        // return this.initFee = (Math.round(initFee * 100) / 100).toFixed(2);
        return this.initFee = initFee;
    }

    vat = () => {
        let fees = this.initiationFee() + this.serviceFee;
        return fees * 15 / 100;

    }

    interest = () => {
        let interest = (this.p * this.ipd / 100) * this.days;
        return this.interestAmount = interest;
    }

    fees = () => {
        let totalFees = this.initiationFee() + this.vat() + this.serviceFee + this.interest();
        return totalFees
    }


}

export default Loan;