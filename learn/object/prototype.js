const Animal = {
  birthday: '01/01/2023',
  sleep() {
    console.log(`${this.breed} is sleeping ~~~~~~~`);
  },
  age() {return (new Date()).getFullYear() - new Date(this.birthday).getFullYear();}
};

function Person(name, birthday, breed='human') {
  this.birthday = birthday;
  this.name = name;
  this.breed = breed;
  this.talk = ()=>{console.log(`hello, I am a ${this.breed}, my name is ${this.name}, I am ${this.age()} years old!`);}
}

Object.assign(Person.prototype, Animal);

let smith = new Person('Smith','01/01/2000');
let david = new Person('David','01/01/2001');
smith.sleep();
smith.talk();
david.talk();

function Mammal(breed){
  this.breed = breed;
}
Object.assign(Mammal.prototype, Animal);

let dogs = new Mammal('dog');
dogs.sleep();