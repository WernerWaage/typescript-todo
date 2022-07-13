export class Timer {
    secondsLeft: number = 0

    constructor(public counter = 90) {
        let intervalId = setInterval(() => {
            this.counter = this.counter - 1
            this.secondsLeft = this.counter
            // console.log(this.counter)
            if (this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }

    public timeLeft() {
        return this.secondsLeft
    }
}
