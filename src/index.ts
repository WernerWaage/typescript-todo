export {}

// Imports
import { v4 as uuidv4 } from 'uuid'
import type { Task } from './types/task.type'
import { Person } from './classes/person.class'
import { makeObservable, observable, action, makeAutoObservable } from 'mobx'
import './components/my-element.ts'
import { html, css, LitElement, render, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { MobxLitElement } from '@adobe/lit-mobx'

// Lit element components:
import './components/simple-greeting/simple-greeting'
import './components/todo.component'
import { Timer } from './classes/timer.class'

console.log('Typescript loaded  🦾 👾')
console.log('-')
console.log(uuidv4())
const person = new Person('John')
const TodoListObserver = observable(person)

const loadtimes = getLoadTimes()
console.log('Loaded : ' + loadtimes + ' times')
let timerCountdown1 = new Timer(3)

const welcomeText = document.getElementById('welcomeText')
const todoHeader = document.getElementById('todoHeader')

welcomeText?.addEventListener('click', function handleClick(event) {
    console.log('clicked the header!')
    welcomeText!.innerHTML =
        'Todo list - You have ' + timerCountdown1.timeLeft() + ' seconds left'
})

// counter
function getLoadTimes(): number {
    const loadtimesString = localStorage.getItem('LOADTIMES')
    let loadtimes = 0
    if (loadtimesString) {
        if (parseInt(loadtimesString) > 0) {
            loadtimes = parseInt(loadtimesString)
        } else {
            loadtimes = 0
        }
    }
    loadtimes++
    localStorage.setItem('LOADTIMES', loadtimes.toString())
    return loadtimes
}

// Model the application state.
class ObservableTimer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }
}
