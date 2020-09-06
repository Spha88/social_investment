import moment from 'moment';

export const formatDate = date => {
    return moment(date).format('DD MMM YYY')
}

/** 
 * Round to the nearest precision
 * Return minAmount of num is less than minAmount
 * Return maxAmount of mum is greater than max amount
 */
export const roundToNearest = (num, precision, minAmount, maxAmount) => {
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

export const addAmount = (e, amount, minAmount, maxAmount, setAmount) => {
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

export const subtractAmount = (e, amount, minAmount, maxAmount, setAmount) => {
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

export const dragSlide = (element, minAmount, maxAmount, setAmount) => {

    const slideBar = element.parentElement;
    const slide = element.parentElement.parentElement;

    // slideBar min width in pixels;
    const slideBarMinWidth = Math.ceil((minAmount / maxAmount) * slide.offsetWidth);

    let pos1 = 0, pos2 = 0;

    /** STOP DRAGGING  */
    const stopDraggingElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    /** ELEMENT DRAG FUNCTION */
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
        setAmount(roundToNearest(currentAmount, 10, minAmount, maxAmount));


        if (slideBar.offsetWidth < slide.offsetWidth && slideBar.offsetWidth > slideBarMinWidth - 1) {
            // Between full length and 60 witch is just less than the toggle size;
            slideBar.style.width = (slideBar.offsetWidth - pos2) + "px";

        } else if (slideBar.offsetWidth > slide.offsetWidth) {
            // At the end of the bar or full bar;

            slideBar.style.width = slide.offsetWidth + "px";

            stopDraggingElement();

        } else if (slideBar.offsetWidth < slideBarMinWidth) {
            // if its less than 60
            slideBar.style.width = slideBarMinWidth + "px";

            stopDraggingElement();

        } else if (slideBar.offsetWidth === slide.offsetWidth) {
            slideBar.style.width = (slideBar.offsetWidth - pos2) + "px";
        }
    }

    /** MOUSE DOWN HANDLER */
    const dragMouseDown = e => {
        e.preventDefault();

        // first position before dragging
        pos1 = e.clientX;

        // Start dragging when the mouse moves
        document.onmousemove = elementDrag;

        // Stop dragging on mouse up
        document.onmouseup = stopDraggingElement;

    }

    element.addEventListener('mousedown', dragMouseDown);

}


// // This function uses exponential notation
export const roundToCurrency = (number) => {
    let newNumber = Number(Math.round(number + "e2") + "e-2");

    // Round to two decimal places and add a zero if the last decimal is 0;
    // newNumber = (Math.round(newNumber * 100) / 100).toFixed(2);

    return newNumber
}