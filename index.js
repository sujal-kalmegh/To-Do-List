let tasks = []
let status = []
function addTask() {
  const input = document.getElementById("task-Input")
  const taskInput = input.value.trim()

  if(taskInput === ""){
    return
  }
  // tasks.push(taskInput)
  // console.log(tasks)

  const li = document.createElement("li")
  li.textContent = taskInput

  li.onclick = () => {
    li.classList.toggle("completed")
    
  }

  document.getElementById("task-list").appendChild(li)

  input.value = ""
}