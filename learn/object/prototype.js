const mammal = {
  sleep() {
    console.log(`${this.name} is sleeping ~~~~~~~`);
  },
};
console.log(mammal.toString());

function Person(name, breed='human') {
  this.name = name;
  this.breed = breed;
  this.talk = ()=>{console.log(`hello, I am a ${this.breed}, my name is ${this.name}!`);}
}
let david = new Person('david');
//david.greet();

Object.assign(Person.prototype, mammal);
// or
// Person.prototype.greet = personPrototype.greet;
let smith = new Person('smith');
smith.talk();

function Animal(name, breed){
  this.name = name;
  this.breed = breed;
}
Object.assign(Animal.prototype, mammal);
let dogs = new Animal('bull','dog');
dogs.sleep();
