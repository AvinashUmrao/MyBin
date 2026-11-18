class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compare = (otherUser) => {
    
    if (this.age > otherUser.age) {
      return `${this.name} is older than ${otherUser.name}`;
    } 
   
    if (this.age < otherUser.age) {
      return `${otherUser.name} is older than ${this.name}`;
    } 
   
    return `${this.name} and ${otherUser.name} are the same age`;
  
  }
}

let user1 = new User("John", 25);
let user2 = new User("Mary", 30);

let result = user1.compare(user2);
console.log(result);