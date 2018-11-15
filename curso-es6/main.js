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
/*
const todo = new TodoList();

document.getElementById('addTodo').onclick = function() {
    todo.addTodo();
}

document.getElementById('showTodo').onclick = function() {
    var div = document.getElementById('display');
    div.innerText = "<h1>" + todo.showTodo() +"</h1>"+ "\n";
} 


const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
    return item * index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);
*/

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => {
    return 'Teste';
}

console.log(teste());