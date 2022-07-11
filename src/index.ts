import confetti from 'canvas-confetti';
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());

// confetti.create(document.getElementById('confetti') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

console.log("Typescript loaded")

 
const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-item-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

type Task = {
    id: string,
    title: string,
    completed: boolean,
    createdAt: Date,
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if(input?.value == "" || input?.value == null) return;
  const newTask:Task = {
    id: uuidv4(),
    title: input.value,
    completed:false,
    createdAt: new Date(),
  }

addListItem(newTask);

});


function addListItem(task:Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}
