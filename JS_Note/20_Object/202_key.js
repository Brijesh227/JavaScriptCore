let x= {}, y = {name:"Ronny"},z = {name:"John"};
 
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
 
console.log(x[y]);      // {name: "Akki"}
console.log(x[z]);      // {name: "Akki"}
console.log(x);         // { '[object Object]': { name: 'Akki' } }

const obj = {
    hello: 'hi'
}

obj['1'] = "hj";
obj[1] = "sa";
console.log(obj);       // { '1': 'sa', hello: 'hi' }

const obj2 = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};
 
const getValue = obj2.getValue;
console.log(getValue());            // undefined
console.log(obj2.getValue());       // 42