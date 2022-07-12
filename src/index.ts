export {}

// Imports
import { v4 as uuidv4 } from 'uuid'
import type { Task } from './types/task.type'
import { Person } from './classes/person.class'
import { makeObservable, observable, action } from 'mobx'
import './components/my-element.ts'
import { html, css, LitElement, render, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { MobxLitElement } from '@adobe/lit-mobx'

// Lit element components:
import './components/simple-greeting/simple-greeting'
import './components/todo.component'
import { Timer } from './classes/timer.class'

function TodoListItems() {
    // { store.todos.map(task => ((task.completed) ? <li>{ task.title } < /li> : <li>{task.title}</li >))) }
}
const person = new Person('John')
const TodoListObserver = observable(person)

console.log(uuidv4())
console.log('Typescript loaded  🦾 👾')

// const list = document.querySelector<HTMLUListElement>('#list')
// const form = document.getElementById('new-task-form') as HTMLFormElement | null
// const input = document.querySelector<HTMLInputElement>('#new-task-title')

// On load:
// const tasks: Task[] = loadTasks()
// tasks.forEach(addListItem)
const loadtimes = getLoadTimes()
console.log('Loaded : ' + loadtimes + ' times')
let timerCountdown1 = new Timer(60)

// // Events
// form?.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if (input?.value == '' || input?.value == null) return
//     const newTask: Task = {
//         id: uuidv4(),
//         title: input.value,
//         completed: false,
//         createdAt: new Date(),
//     }
//     tasks.push(newTask)
//   saveTasks(tasks)
//     addListItem(newTask)
//     input.value = ''
// })

const buttonMain = document.getElementById('btnMain')
const todoHeader = document.getElementById('todoHeader')

buttonMain?.addEventListener('click', function handleClick(event) {
    // console.log('button clicked');
    // console.log(event);
    // console.log(event.target);
    todoHeader!.innerHTML =
        'Todo list - You have ' + timerCountdown1.timeLeft() + ' seconds left'
})

// function addListItem(task: Task) {
//     const item = document.createElement('li')
//     const label = document.createElement('label')
//     const checkbox = document.createElement('input')
//     checkbox.addEventListener('change', () => {
//         task.completed = checkbox.checked
//         saveTasks(tasks)
//     })
//     checkbox.type = 'checkbox'
//     checkbox.checked = task.completed
//     label.append(checkbox, task.title)
//     item.append(label)
//     list?.append(item)

// }

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
