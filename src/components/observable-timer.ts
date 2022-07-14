import { LitElement, html } from 'lit'
import {map} from 'lit/directives/map.js';
import {
    makeObservable,
    observable,
    action,
    makeAutoObservable,
    values,
} from 'mobx'
import { MobxLitElement } from '@adobe/lit-mobx'
import { ObservableTimer } from './observable-timer-base'

export class ObservableTimerView extends LitElement {
    // Properties
    public secondsPassed = myTimer.secondsPassed

    constructor() {
        super()
        this.secondsPassed = 0;
    }

    // Check for updates, trigger a re-render if needed.
    static get properties(){ return {
            secondsPassed: {
            type: Number,
            hasChanged(newVal:any, oldVal:any) {
                if (newVal != oldVal)  return true;
                else return false;
            }
            }};
        }



    render() {
        const resetbutton = html`<button
            @click=${() => this.forceUpdate(myTimer.secondsPassed)}
        >
            Test ${myTimer.staticSeconds}
        </button><br><button @click="${this.getNewVal}">get new value</button>`
        return html`
            <div>
                This is an observable timer!
                <p>${this.secondsPassed} seconds</p>
                <br />${resetbutton}
            </div>
        `
    }


        getNewVal(){
            let newVal = Math.floor(Math.random()*10);
            this.secondsPassed = newVal;
        }


    forceUpdate(newValue: number) {
        this.secondsPassed = newValue
        this.requestUpdate()
        return null
    }
}
const myTimer = new ObservableTimer()
customElements.define('observable-timer', ObservableTimerView)
function property() {
    throw new Error('Function not implemented.')
}

