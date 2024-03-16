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
    let _birthday = Date.parse(birthday);
    return {
        name,
        age: () => {
            //let birthday = new Date(_birthday);
            return Math.floor((Date.now() - _birthday)/(365*24*3600000));
        },
        introduceSelf: function () {
            console.log(`Hi! I'm ${this.name} ${Math.floor((Date.now() - this._birthday)/(365*24*3600000))}.`);
        }
    };
}

let smith = createPerson('smith', '2000/01/01');
console.log(`${smith.name} is ${smith.age()} years old`);
smith.name = 'David';
console.log(`${smith.name} is ${smith.age()} years old`);
console.log(smith.introduceSelf());
smith._birthday = Date.parse('2022/01/01');
console.log(`${smith.name} is ${smith.age()} years old`);

