import { makeObservable, observable, action } from 'mobx'

class Todo {
    id = Math.random()
    title = ''
    finished = false

    constructor(title: any) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action,
        })
        this.title = title
    }

    toggle() {
        this.finished = !this.finished
    }
}
