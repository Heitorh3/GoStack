"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todo = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todo.push("Todo");
    }
  }, {
    key: "showTodo",
    value: function showTodo() {
      console.log(this.todo);
      return this.todo;
    }
  }]);

  return TodoList;
}();
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


var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return 'Teste';
};

console.log(teste());
