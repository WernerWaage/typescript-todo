import { action, makeAutoObservable, observable } from 'mobx'

export class Options {
    @observable
    public showOptions: boolean = false

    @action
    public toggle() {
        console.log("Toggle called - current property:" + this.showOptions);
        if (this.showOptions) {
            this.showOptions = false
        } else {
            this.showOptions = true
        }
    }

    constructor() {
        makeAutoObservable(this, {
            showOptions: observable,
            toggle: action,
        })
    }
}
