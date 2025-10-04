function clearAll() {
  document.getElementById("task-list").innerHTML = ""
}

document.getElementById("task-Input").addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    addTask()
  }
})

// let tasks = []
// let status = []
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

  // span.addEventListener("click", e =>{
  //   span.classList.toggle("completed")
  // })

  const delBtn = document.createElement("button")
  delBtn.textContent = "❌"
  delBtn.addEventListener("click", function (e){
    e.stopPropagation();
    li.remove();
  })
  li.appendChild(span)
  li.appendChild(delBtn)
  li.addEventListener("click", function(){
    if(!span.classList.contains("completed")){
      span.classList.toggle("completed")
    }
  })
  document.getElementById("task-list").appendChild(li)

  input.value = ""
}