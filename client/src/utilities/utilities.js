import moment from 'moment';

export const formatDate = date => {
    return moment(date).format('DD MMM YYY')
}

/** 
 * Round to the nearest precision
 * Return minAmount of num is less than minAmount
 * Return maxAmount of mum is greater than max amount
 */
export const round = (num, precision, minAmount, maxAmount) => {
    num = parseFloat(num);
    if (!precision) return num;

    if (num < minAmount) return minAmount;
    if (num > maxAmount) return maxAmount;

    return (Math.round(num / precision) * precision);
};

export const clearSelection = () => {
    if (document.selection && document.selection.empty) {
        document.selection.empty();
    } else if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}