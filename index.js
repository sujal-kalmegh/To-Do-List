function clearAll() {
  document.getElementById("task-list").innerHTML = ""
}

document.getElementById("task-Input").addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    addTask()
  }
})

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

  const span = document.createElement("span")
  span.textContent = taskInput
  span.style.cursor = "pointer"

  // li.textContent = taskInput

  span.onclick = () => {
    li.classList.toggle("completed")
  }

  const delBtn = document.createElement("button")
  delBtn.textContent = "❌"
  delBtn.onclick = () => {
    li.remove()
  }

  li.appendChild(span)
  li.appendChild(delBtn)

  document.getElementById("task-list").appendChild(li)

  input.value = ""
}