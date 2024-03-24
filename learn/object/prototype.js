const Animal = {
  sleep() {
    console.log(`${this.breed} is sleeping ~~~~~~~`);
  },
  //age() {return (new Date()).getFullYear() - new Date(birthday).getFullYear();}
};

function Person(name, birthday, breed='human') {
  this.name = name;
  this.breed = breed;
  this.talk = ()=>{console.log(`hello, I am a ${this.breed}, my name is ${this.name}, I am ${this.age()} years old!`);}
  this.age = () => {return (new Date()).getFullYear() - new Date(birthday).getFullYear();}
}

Object.assign(Person.prototype, Animal);

let smith = new Person('smith','01/01/2000');
smith.sleep();
smith.talk();

function Mammal(breed){
  this.breed = breed;
}
Object.assign(Mammal.prototype, Animal);

let dogs = new Mammal('dog');
dogs.sleep();