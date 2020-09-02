import moment from 'moment';

export const formatDate = date => {
    return moment(date).format('DD MMM YYY')
}

export const round = (num, precision, minAmount, maxAmount) => {
    num = parseFloat(num);
    if (!precision) return num;

    if (num < minAmount) return minAmount;
    if (num > maxAmount) return maxAmount;

    return (Math.round(num / precision) * precision);
};