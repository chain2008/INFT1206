class Person {
  name;
  constructor(name) {
      this.name = name;
  }
  introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
  }
}
class Student extends Person {
  #score;
  constructor(name, score) {
      super(name);
      this.#score = score;
  }

  introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I ${this.canHaveCoop()?'can': 'cannot'} have coop.`);
  }

  canHaveCoop() {
      return this.#score > 3.0;
  }
}

const summers = new Student("Summers", 2);
summers.introduceSelf();
summers.#sorce ++;
const springs = new Student("Springs", 3.1);
springs.introduceSelf();