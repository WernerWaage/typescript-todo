import {
    action,
    computed,
    makeAutoObservable,
    makeObservable,
    observable,
} from 'mobx'
export class ObservableTimer {
    @observable
    public secondsPassed: number = 0

    @action
    public increment() {
        this.secondsPassed++
    }

    @action
    public resetTimer() {
        this.secondsPassed = 0
    }

    constructor() {
        makeAutoObservable(this, {
            secondsPassed: observable,
            handleSecondsUpdated: action,
            minutesPassed: computed,
            increase: action,
            resetTimer: action,
        })

        let intervalId = setInterval(() => {
            this.increase()
        }, 1000)
    }

    // Computed value example
    public get minutesPassed() {
        return this.secondsPassed / 60
    }

    increase() {
        // console.log('increasing ' + this.secondsPassed)
        this.secondsPassed += 1
    }

    // Change the seconds from outside the class (eg. not the timer)
    public handleSecondsUpdated(secondsPassed: number) {
        this.secondsPassed = secondsPassed
    }
}
