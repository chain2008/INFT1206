const mammal = {
  sleep() {
    console.log(`${this.name} is sleeping ~~~~~~~`);
  },
};

function Person(name, breed='human') {
  this.name = name;
  this.breed = breed;
  this.talk = ()=>{console.log(`hello, I am a ${this.breed}, my name is ${this.name}!`);}
}

Object.assign(Person.prototype, mammal);

let smith = new Person('smith');
let david = new Person('david');
smith.sleep();
smith.talk();

function Animal(name, breed){
  this.name = name;
  this.breed = breed;
}
Object.assign(Animal.prototype, mammal);

let dogs = new Animal('bull','dog');
dogs.sleep();