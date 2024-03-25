class Person {
    name;
    #birthday;
    constructor(name, birthday) {
        this.name = name;
        this.#birthday = birthday;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
    age(){return (new Date()).getFullYear() - new Date(this.#birthday).getFullYear();}
}

class Student extends Person {
    #score;

    constructor(name, score, birthday) {
        super(name, birthday);
        this.#score = score;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name} ${this.age()} years old and I ${this.canHaveCoop()?'can': 'cannot'} have coop.`);
    }

    canHaveCoop() {
        return this.#score > 3.0;
    }
}

const summers = new Student("Summers", 2,'01/01/2000');
summers.introduceSelf();
const springs = new Student("Springs", 3.1,'01/01/2001');
springs.introduceSelf();


