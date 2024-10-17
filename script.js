let addTodo = document.getElementById("add-todo");
addTodo.addEventListener("click", function () {


    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim()

    if (todoText !== "") {
        createTodo(todoText)
        todoInput.value =("")

    }

});

function createTodo(Text) {
    const todoGet = document.getElementById("todo-get");

    const li = document.createElement("li")
    const removeBtn =document.createElement("button")
    removeBtn.textContent = "Remove"
    li.textContent = Text
    removeBtn.addEventListener("click" ,function(){
        todoGet.removeChild(li)
    })
     
 
    todoGet.appendChild(li);
    li.appendChild(removeBtn)
   
};



