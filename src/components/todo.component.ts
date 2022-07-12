import { LitElement, html, css } from 'lit'
import { customElement, state, property, query } from 'lit/decorators.js'
import type { Task } from 'src/types/task.type'
import { v4 as uuidv4 } from 'uuid'

@customElement('todo-list')
export class ToDoList extends LitElement {
    static styles = css`
        .completed {
            text-decoration-line: line-through;
            color: #777;
        }
    `

    @state()
    private _listItems: Task[] = loadTasks()
    private _selectedItem: string | null = null

    @property()
    hideCompleted = false

    render() {
        const items = this.hideCompleted
            ? this._listItems.filter((item) => !item.completed)
            : this._listItems

        const todos = html`
            <ul>
                ${items.map(
                    (item) =>
                        html` <li
                            class=${item.completed ? 'completed' : ''}
                            @click=${() => this.selectItem(item)}
                        >
                            ${item.title}
                        </li>`
                )}
            </ul>
        `
        const caughtUpMessage = html` <p>You're all caught up!</p> `
        const todosOrMessage = items.length > 0 ? todos : caughtUpMessage

        return html`
            <h2>To Do</h2>
            ${todosOrMessage}
            <input id="newitem" aria-label="New item" />
            <button @click=${this.addToDo}>Add</button>
            <br />
            <label>
                <input
                    type="checkbox"
                    @change=${this.setHideCompleted}
                    ?checked=${this.hideCompleted}
                />
                Hide completed
            </label>
            <div id="selectedItem">
                <p>Selected item:</p>
                ${this._selectedItem
                    ? html`<todo-item .item=${this._selectedItem}></todo-item>`
                    : ''}
                ${this._selectedItem ? html`<p>${this._selectedItem}</p>` : ''}
            </div>
        `
    }

    toggleCompleted(item: Task) {
        item.completed = !item.completed
        this.requestUpdate()
    }

    selectItem(item: Task) {
        console.log('selectItem', item)
        this._selectedItem = item.title
        console.log(this._selectedItem)
        // this.requestUpdate();

        // Show the selected item in a sepratate box:
    }

    setHideCompleted(e: Event) {
        this.hideCompleted = (e.target as HTMLInputElement).checked
    }

    @query('#newitem')
    input!: HTMLInputElement

    addToDo() {
        const newTask: Task = {
            title: this.input.value,
            completed: false,
            createdAt: new Date(),
            id: uuidv4(),
        }
        this._listItems = [...this._listItems, newTask]
        saveTasks(this._listItems)
        this.input.value = ''
    }
}

export function saveTasks(tasks: Task[]) {
    localStorage.setItem('TASKS', JSON.stringify(tasks))
}

export function loadTasks(): Task[] {
    const tasksString = localStorage.getItem('TASKS')
    if (tasksString) {
        // tasks.push(...JSON.parse(tasksString));
        return JSON.parse(tasksString)
    } else {
        return []
    }
}
