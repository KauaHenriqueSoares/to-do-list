let arrTasks = []

const itemInput = document.getElementById("item-input")
const addItem = document.getElementById("addItem")
const todoList = document.getElementById("todo-list")
const todoItems = todoList.querySelectorAll("li")

addItem.addEventListener("submit", function(event) {
event.preventDefalt()
if (itemInput.value) {
    addTask(itemInput.value)
    itemInput.value = ""
    itemInput.focus()
}
})

todoList.addEventListener("click", function(event){
    let task = event.target 
    let action = task.getAttribute("action")
    while(task.nodeName !== "LI") {
        task = task.parentElement 
    }
    let taskIndex = [...todoItems].indexOf(task)
    let editContainer = document.querySelector(".editContainer")
    let containerEditButton = editContainer.querySelector(".editButton")
    let containerCancelButton = editContainer.querySelector(".cancelButton")
    const actions = {
        checkButton: function(checkButton){

        },
        editButton: function(editButton){

        },
        deleteButton: function(deleteButton){

        },
        containerEditButton: function(containerEditButton){

        },
        containerCancelButton: function(containerCancelButton){

        },

    }
    
})

function addTask (taskName) {
    console.log(taskName)

}