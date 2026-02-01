//prevent default behavior of form submission
//input,  form 

document.addEventListener("DOMContentLoaded",()=> {
   const btn= document.getElementById("add-task-btn");
   const form= document.getElementById("form");

   btn.addEventListener("click", () => {
      form.classList.toggle("hidden");
   });
});
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = document.getElementById("task-input");
    const statusInput = document.getElementById("status");
    const dueDateInput = document.getElementById("due-date");
    const task={
        name: taskInput.value,
        status: statusInput.value,
        dueDate: dueDateInput.value
    }
 const newTask=document.createElement("form");
 newTask.innerHTML=`<p>${task.name}  ${task.dueDate}</p>
            <div class="dropdownStatusItem">
                <label for="status">Status:</label>
                <select id="statusItem" name="status">
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>`;
 document.body.appendChild(newTask);
 
});
const statusSelect = document.getElementById(`statusItem`);
statusSelect.addEventListener("change", (e) => {
    if (e.target && e.target.id === `statusItem`) {
        const selectedStatus = e.target.value;
        console.log("Task status changed to:", selectedStatus);
    }
});
