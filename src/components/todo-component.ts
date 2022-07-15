import { MobxLitElement } from '@adobe/lit-mobx'
import { LitElement, html, css, PropertyValues } from 'lit'
import { customElement, state, property, query } from 'lit/decorators.js'
import type { Task } from 'src/types/task.type'
import { v4 as uuidv4 } from 'uuid'
import { commonStylesheet } from './common-component-style'
import { Options } from './options-class'
 


export function saveTasks(tasks: Task[]) {
    localStorage.setItem('TASKS', JSON.stringify(tasks))
}

export function loadTasks(): Task[] {
    const tasksString = localStorage.getItem('TASKS')
    if (tasksString) {
        return JSON.parse(tasksString)
    } else {
        return []
    }
}
const myOptions = new Options()
@customElement('todo-list')
export class ToDoList extends MobxLitElement {

    static styles = css`
        ${commonStylesheet}
        h2 {
            margin:20px;
            padding-top:20px;    
            display: block;
            font-size: 1.5em;
            margin-inline-start: 20px;
            font-weight: bold;
            line-height: 1.5em
        }
        .innerList {
            padding: 1px;
        }
        .completed {
            text-decoration-line: line-through;
            color: #777;
        }
        ul {
            list-style-type: none;
        }
    `
    @state()
    private _listItems: Task[] = loadTasks()
    private _selectedItemTask: Task = {} as Task
    _feedback: string = ''

    @query('#newitem')
    input!: HTMLInputElement

    hideCompleted: boolean = false
    selectedItem!: Task

    private _deleteThing(index: number) {
        this._listItems = this._listItems.filter((_, i) => i !== index)
        this._feedback = 'Item deleted'
        saveTasks(this._listItems)
    }

    private _updateThing(item: Task) {
        console.log(item)
        this.requestUpdate()
    }

    render() {
        // Filter items before rendering:
        const items = this.hideCompleted
            ? this._listItems.filter((item) => !item.completed)
            : this._listItems

        // Create the list of tasks
        const renderTodoList = html`
       
            <div class="innerList">
                <ul class="checkboxes">
                    ${items.map(
                        (item, index) =>
                            html` <li
                                class=${item.completed ? 'completed' : ''}
                                @click=${() => this.selectItem(item)}
                            >
                                <input
                                    type="checkbox"
                                    class="checkbox red"
                                    ?checked=${item.completed}
                                    @change=${this.toggleTaskCompleted}
                                />
                                ${this._selectedItemTask!.id == item.id
                                    ? html`<span>${item.title}*</span>
                                          <button
                                              @click=${() =>
                                                  this._updateThing(item)}
                                          >
                                              Edit
                                          </button>
                                          <button
                                              @click=${() =>
                                                  this._deleteThing(index)}
                                          >
                                              Delete
                                          </button> `
                                    : html`<span>${item.title}</span>`}
                            </li>`
                    )}
                </ul>
            </div>
        `
        const caughtUpMessage = html` <p>You're all caught up!</p> `
        const renderPlaceholder =
            items.length > 0 ? renderTodoList : caughtUpMessage
        const outputHeader = html`<h2>To Do</h2>`
        // Main output of the component:
        return html`
            <div class="container taskContainer">
                ${outputHeader} ${this._feedback} ${renderPlaceholder}

                <div class="inputContainer">
                    <input id="newitem" class="input-task" aria-label="New item" />
                    <button @click=${this.addToDo}>Add</button>
                </div>
                    <br />



            </div>
        `
    }

    toggleCompleted(item: Task) {
        item.completed = !item.completed
        this.requestUpdate()
    }

    selectItem(item: Task) {
        // Save the selected item for manipulation in the component
        this._selectedItemTask = item
        this.requestUpdate()
    }

    setHideCompleted(e: Event) {
        this.hideCompleted = (e.target as HTMLInputElement).checked
        this.requestUpdate()
    }

    toggleTaskCompleted(e: Event) {
        // Is there a secret Lit trick to do this simpler?
        let _checked = (e.target as HTMLInputElement).checked
        if (this._selectedItemTask) {
            this._selectedItemTask.completed = _checked
        }
        saveTasks(this._listItems)
    }

    addToDo() {
        const newTask: Task = {
            title: this.input.value,
            completed: false,
            createdAt: new Date(),
            id: uuidv4(),
        }
        if (newTask.title.length == 0) {
            this._feedback = 'Title too short'
            this.requestUpdate()
        } else {
            this._listItems = [...this._listItems, newTask]
            this._feedback = 'New task created'
            saveTasks(this._listItems)
            this.input.value = ''
        }
    }

    // Lifecycle methods
    // Unused methods for reference
    protected updated(changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('selectedItem')) {
            console.log('Selected item updated')
        }
    }

    // If one property should update another, before rendering out the component
    willUpdate(changedProperties: PropertyValues<this>) {
        if (changedProperties.has('selectedItem')) {
            // this.backward = this.forward.split('').reverse().join('');
        }
    }
}