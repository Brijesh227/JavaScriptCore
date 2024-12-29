const a = [{name:'a',age:20}]
const b = [...a,{name:'b',age:30}]
b[0].name='c'
b[1].name='d'
console.log(a)
console.log(b)

const a = {name:'a',age:20}
const b = [{...a},{name:'b',age:30}]
b[0].name='c'
b[1].name='d'


const arr = [..."whatever"];
console.log(arr);               // [ 'w', 'h', 'a', 't', 'e', 'v', 'e', 'r' ]

const arr3 = [...["whatever"]];
console.log(arr);               // [ 'whatever' ]

class CustomEventEmitter {
    emit(eventName, ...args) {
        console.log(args); // Logs the collected arguments as an array
    }
}

const customEvent = new CustomEventEmitter();

// Passing strings as separate arguments
customEvent.emit('foo', "hello2", "hi2");
// Logs: ["hello2", "hi2"]

// Passing a spread string
customEvent.emit('foo', ..."hello2");
// Logs: ["h", "e", "l", "l", "o", "2"]

// Passing an array and spreading it
customEvent.emit('foo', ...["hello2", "hi2"]);
// Logs: ["hello2", "hi2"]

// Passing a single array
customEvent.emit('foo', ["hello2", "hi2"]);
// Logs: [["hello2", "hi2"]] (the entire array as a single argument)
