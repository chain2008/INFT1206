const Person = {
    //name: ["Bob", "Smith"],
    //birthday: new Date(),
    age: function(){ //cannot be arrow function
        //let birthday = new Date(_birthday);
        return (new Date()).getFullYear() - this.birthday.getFullYear();
    },
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age()} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};

function Student(name, birthday) {
    this.name = ["Bob", "Smith"];
    this.birthday = new Date(birthday);
};
//we only prototype to reuse function
Object.assign(Student.prototype , Person);

let smith = new Student('smith', '2000/01/01');
console.log(`${smith.name} is ${smith.age()} years old`);