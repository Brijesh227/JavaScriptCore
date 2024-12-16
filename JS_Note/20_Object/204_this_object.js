const Person = {
    name: "john doe",
    getName: () => {
        console.log(`hello ${this.name}`);
    },
    getName2: () => {
        console.log(this.name);
    }
}

Person.getName();           // hello
Person.getName2();          // "" empty   ------(important)---------
const per = new Person();   // TypeError: Person is not a constructor
per.getName();