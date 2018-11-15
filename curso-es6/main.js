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

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => {
    return 'Teste';
}

const soma = (a = 2, b = 5) => a + b;

console.log(soma(1));
console.log(soma());
*/

const usuario = {
    nome: 'Heitor Neto',
    idade: 34,
    endereco: {
        cidade: 'Uberlandia',
        estado: 'Minas Gerais'
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
function mostraNome({nome, idade}){
    console.log(nome, idade);
}

console.log(usuario);

const {nome, idade, endereco: {cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

mostraNome(usuario);
*/

//REST
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const [a, b, c, ...d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


function soma(...params){
    return params.reduce((total, next) => total + next );
}

console.log(soma(1,2,3,4));

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {...usuario, nome: 'Joao de Deus'};
console.log(usuario1);