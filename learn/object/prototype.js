const Animal = {
  birthday: '01/01/2023',
  sleep() {
    console.log(`${this.breed} is sleeping ~~~~~~~`);
  },
  age() {return (new Date()).getFullYear() - new Date(this.birthday).getFullYear();}
};

function Mammal(breed){
  this.breed = breed;
  this.walk = ()=>{
    console.log(`${this.breed} is walking .....`);
  }
}
Object.assign(Mammal.prototype, Animal);

let dogs = new Mammal('dog');
dogs.sleep();
dogs.walk();

function Person(name, birthday, breed='human') {
  Person.prototype.birthday = '01/01/1990';
  this.birthday = birthday;
  this.name = name;
  this.breed = breed;
  this.talk = ()=>{console.log(`hello, I am a ${this.breed}, my name is ${this.name}, I am ${this.age()} years old!`);}
}

Object.assign(Person.prototype, dogs);

let smith = new Person('Smith','01/01/2000');
let david = new Person('David','01/01/2001');
smith.sleep();
smith.talk();
david.talk();

