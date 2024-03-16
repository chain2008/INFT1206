//An object like this is referred to as an object literal    
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};

function createPerson(name, birthday) {
    let _birthday = new Date(birthday);
    return {
        name,
        age: () => {
            //let birthday = new Date(_birthday);
            return (new Date()).getFullYear() - _birthday.getFullYear();
        },
        introduceSelf: function () {
            console.log(`Hi! I'm ${this.name} ${(new Date()).getFullYear() - this._birthday.getFullYear()}`);
        }
    };
}

let smith = createPerson('smith', '2000/01/01');
console.log(`${smith.name} is ${smith.age()} years old`);
smith.name = 'David';
console.log(`${smith.name} is ${smith.age()} years old`);
console.log(smith.introduceSelf());

smith._birthday = new Date('2022/01/01');
console.log(`${smith.name} is ${smith.age()} years old`);
console.log(smith.introduceSelf());

