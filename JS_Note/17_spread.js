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