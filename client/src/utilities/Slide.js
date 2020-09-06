
class Slide {

    constructor(element, period, setPeriod) {
        this.element = element;
        this.period = period;
        this.setPeriod = setPeriod
        this.maxPeriod = 60;
        this.minPeriod = 15; // set this through moment
    }

    init = () => {
        if (this.element) {
            this.subtractBtn = this.element.firstElementChild;
            this.addBtn = this.element.lastElementChild;
            this.moneyBar = this.element.children[1].firstElementChild;
            this.moneyBarHandle = this.element.children[1].firstElementChild.firstElementChild;

            // Max width of the container slider. 
            this.moneyBarCont = this.element.children[1];

            // adjust the width of the bar to the initial number of days
            this.moneyBar.style.width = Math.round(this.period / this.maxPeriod * this.moneyBarCont.offsetWidth) + "px";

            this.addBtn.onclick = () => this.increasePeriod();
            this.subtractBtn.onclick = () => this.decreasePeriod();
            this.moneyBarHandle.onmousedown = this.StartDragging;
        }
    }

    elementDrag = e => {
        e.preventDefault();
        const maxWidth = this.moneyBarCont.offsetWidth;

        // calculate the horizontal movement from initial position of mouse(pos1)
        this.pos2 = (this.pos1 - e.clientX);

        // update initial position
        this.pos1 = e.clientX;

        // calculate and setWidth
        let width = (this.moneyBar.offsetWidth - this.pos2);

        if (this.period >= this.minPeriod && this.period <= this.maxPeriod) {
            this.moneyBar.style.width = width + "px";
            this.period = (this.maxPeriod * (width / maxWidth))
            this.setPeriod(this.period);

        } else if (this.period > this.maxPeriod) {
            if (this.pos2 > -1) {
                this.moneyBar.style.width = width + "px";
                this.period = (this.maxPeriod * (width / maxWidth))
                this.setPeriod(this.period);
            }

        } else if (this.period < this.minPeriod) {
            if (this.pos2 < 0) {
                this.moneyBar.style.width = width + "px";
                this.period = (this.maxPeriod * (width / maxWidth))
                this.setPeriod(this.period);
            }
        }

        // console.log(`Direction: ${this.pos2} Period: ${this.period} moneyBarWidth: ${this.moneyBar.offsetWidth} MaxWidth: ${maxWidth}`);
    }

    stopDraggingElement = () => {

        // Remove mouse events;
        document.onmouseup = null;
        document.onmousemove = null;

        // Make sure that period is not less than minPeriod;
        if (this.period < this.minPeriod) {
            this.period = this.minPeriod;
            this.setPeriod(this.minPeriod);
        }

        // Make sure period is not greater than maxPeriod at the end of slide
        if (this.period > this.maxPeriod) {
            this.period = this.maxPeriod;
            this.setPeriod(this.period);
        }

        // console.log('Stop dragging')
    }

    StartDragging = e => {
        e.preventDefault();
        // console.log('Start dragging');

        this.pos1 = e.clientX;
        document.onmousemove = this.elementDrag;
        document.onmouseup = this.stopDraggingElement;
    }

    increasePeriod = () => {
        if (this.period < this.maxPeriod) {
            this.period++;
            this.setPeriod(this.period);
        }
    }
    decreasePeriod = () => {
        if (this.period > this.minPeriod) {
            this.period--;
            this.setPeriod(this.period);
        }
    }
}

export default Slide;