import {
    action,
    computed,
    makeAutoObservable,
    makeObservable,
    observable,
} from 'mobx'
export class ObservableTimer {
    public secondsPassed: number = -1
    constructor() {
        makeAutoObservable(this, {
            secondsPassed: observable,
            handleSecondsUpdated: action,
            staticSeconds: computed,
        })

        let intervalId = setInterval(() => {
            this.increase()
        }, 1000)
    }

    // Computed value example
    public get staticSeconds() {
        return 5 * this.secondsPassed
    }

    increase() {
        console.log('increasing ' + this.secondsPassed)
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }

    // Change the seconds from outside the class (eg. not the timer)
    public handleSecondsUpdated(secondsPassed: number) {
        console.log('Handling change')
        this.secondsPassed = secondsPassed
    }
}

// const TimerView = observer(({ timer }) => (
//     <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
// ))
