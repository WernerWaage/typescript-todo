// store - the truth is in here
import type { Task } from "./types/task.type"
import { observable, action, computed, makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from 'uuid'

export const removeTodo = (todos: Task[], id: string): Task[] =>
    todos.filter((todo) => todo.id !== id);

    const addTodo = (todos: Task[], title: string): Task[] => {
        const newTodo: Task = {
            id: uuidv4(),
            title,
            completed: false,
            createdAt: new Date(),
        };
        // check if the todo is already in the list
        return [...todos, newTodo];
    }

 // MobX implementation
class Store {

    // Auto observables:
    todos: Task[] = []
    newTodo: string = ''

    constructor() {
        makeAutoObservable(this);
    }

    addTodo() {
        this.todos = addTodo(this.todos, this.newTodo);
        this.newTodo = ''
    }
}
 
const store = new Store();
export default store;