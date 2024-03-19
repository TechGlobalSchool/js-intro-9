/*
Create a class called Cat
Create a constructor which takes below information and defines template to create many objects from the class
name, color, age

Create 3 functions as below
makesSound() -> 'MEOW'
eat() -> 'EAT'
sleep() -> 'SLEEP'

*/

class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  makesSound() {
    console.log("MEOW");
  }

  eat() {
    console.log("EAT");
  }

  sleep() {
    console.log("SLEEP");
  }
}

/*
cat1 -> Simba, Orange, 1
cat2 -> Lucy, White, 2
cat3 -> Oliver, Brown, 3
*/

const cat1 = new Cat("Simba", "Orange", 1);
const cat2 = new Cat("Lucy", "White", 2);
const cat3 = new Cat("Oliver", "Brown", 3);

/*
Log each cat
Execute 3 functions for each cat
Find and print the oldest cat -> Cat { name: 'Oliver', color: 'Brown', age: 3 }
*/

const cats = [cat1, cat2, cat3];

let oldest = cats[0];

for(const cat of cats) {
    console.log(cat);
    cat.makesSound();
    cat.eat();
    cat.sleep();
    console.log();

    if(cat.age > oldest.age) oldest = cat;
}

const oldest2 = cats.reduce((old, cat) => {
    if(cat.age > old.age) return cat;
    return old;
});

console.log('Oldest', oldest);
console.log('Oldest', oldest2);