// To Do app

let input = prompt('Enter something to your list');
const todo = ['lemon'];

while(input !== 'quit' && input !== 'q'){
    if(input === 'list') {
        console.log('**********')
        for (let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('*********')
    } else if (input === 'new'){
        const newTodo = prompt('Ok, what next');
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`) 
    } else if (input === 'delete') {
        const index = prompt('enter an index to delete, view an index by typing "list"')
        const deleted = todo.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]} from the list`)
    }
    input = prompt('Enter something to your list');

}
console.log('Ok, You have now quit')
