class Animal {
    #breed
    constructor(breed) {
        this.#breed = breed;
    }    
    sleep() {
        console.log(`${this.#breed} zzzzzzz`);
    }
}

class Person extends Animal{
    name;
    constructor(name) {
        super('human');
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

const spot = new Animal('dog');
spot.sleep(); // 'zzzzzzz'
spot.introduceSelf();

const giles = new Person("Giles");
giles.introduceSelf(); // Hi! I'm Giles
giles.sleep();
console.log(`giles ${giles.name}`)
