class GuessingGame {

    constructor() {};
    
    setRange(min, max) {
        this.minBorder = min;
        this.maxBorder = max;
        console.log(this.minBorder, this.maxBorder)
    };

    guess() {
        console.log(Math.ceil((this.minBorder+this.maxBorder)/2));
        return (Math.ceil((this.minBorder+this.maxBorder)/2));
    };

    lower() {
        this.maxBorder = this.guess();
        console.log(`min border: ${this.minBorder}`, `max border: ${this.maxBorder}`);
        return this.maxBorder;
    };

    greater() {
        this.minBorder = this.guess();
        console.log(`min border: ${this.minBorder}`, `max border: ${this.maxBorder}`);
        return this.minBorder;
    };
}

module.exports = GuessingGame;
