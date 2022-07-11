export {};
  
import { v4 as uuidv4 } from 'uuid'
import type { Task } from './types/task.type';
import { Person } from './classes/person.class'
const person = new Person('John')
console.log(uuidv4())

console.log('Typescript loaded  🦾 👾')

const list = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById('new-task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>('#new-task-title')


// On load:
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

form?.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input?.value == '' || input?.value == null) return
    const newTask: Task = {
        id: uuidv4(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    }
    tasks.push(newTask)

    addListItem(newTask)
    input.value = ''
})

function addListItem(task: Task) {
    const item = document.createElement('li')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked
        saveTasks()
    })
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed
    label.append(checkbox, task.title)
    item.append(label)
    list?.append(item)
}

function saveTasks() {
    localStorage.setItem('TASKS', JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const tasksString = localStorage.getItem('TASKS')
    if (tasksString) {
        // tasks.push(...JSON.parse(tasksString));
        return JSON.parse(tasksString)
    } else {
        return []
    }
}
