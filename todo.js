const prompt = require("prompt-sync")();

let todoList = [];
let maxItems = 10;

// Add items to the list
function addItem(item) {
    if (todoList.includes(item)) {
        console.log("That item is already in the list. Please enter something else.")
        return false;
    } else {
        todoList.push(item);
        return true;
    }
}

// Display the full list
function displayList() {
    console.log("\nYour ToDo List is:");
    for (let i=0; i < todoList.length; i++) {
        console.log((i+1) + ". " + todoList[i]);
    }
}

// Run the program
function runTodoApp() {
    while (todoList.length < maxItems) {
        let item = prompt("Enter a ToDo Item: ");
        addItem(item);
    }
    displayList();
}

runTodoApp();