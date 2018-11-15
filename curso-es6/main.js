class TodoList {

    constructor(){
        this.todo = [];
    }

    addTodo(){
        this.todo.push("Todo");
    }

    showTodo(){
        console.log(this.todo);
        return this.todo;
    }
}

const todo = new TodoList();

document.getElementById('addTodo').onclick = function() {
    todo.addTodo();
}

document.getElementById('showTodo').onclick = function() {
    var div = document.getElementById('display');
    div.innerText = "<h1>" + todo.showTodo() +"</h1>"+ "\n";
} 