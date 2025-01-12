/**
 * The rest parameter collects all arguments into an array.(double check rest not in spread)
 * 
 * whatever pass to ...(rest) wrap in [] as simple as that
 * 
 */

function main1(args) {
    console.log('here argument',args);      
}

function main2(...args) {
    console.log('here argument',args);      
}

const ar = ['1', '2'];
main1(ar);      // [ '1', '2' ]
main2(ar);      // [ [ '1', '2' ] ]
main1(1,2);     // 1
main2(1,2)      // [ 1, 2 ]


const a1 = [{name:'a',age:20}]
const b1 = [...a1,{name:'b',age:30}]
b1[0].name='c';
b1[1].name='d';
console.log(a1)
console.log(b1)

const a2 = {name:'a',age:20}
const b2 = [{...a2},{name:'b',age:30}]
b2[0].name='c';
b2[1].name='d';
console.log(a2)
console.log(b2)


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
