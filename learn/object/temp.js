const person = {
    name: {
      first: "Bob",
      last: "Smith"
    },
    age: 32,
    bio: function () {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name.first}.`);
    },
  };

let clientPersonText = JSON.stringify(person);
console.log(`person is ${clientPersonText}`);
//Http Request send  clientPersonText to server .....
let servPerson = JSON.parse(clientPersonText);
console.log(`${servPerson.name.first} is ${servPerson.age} years old`);
  //console.log(person.toString2());


//person.name[0] = 'david';
//person.bio();
// "Bob Smith is 32 years old."
//person.introduceSelf();
// "Hi! I'm Bob."
