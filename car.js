"use strict"
// import the parent class here

const {Vehicle, Customer} = require("./vehicle.js")

// Initialize a class Car from Vehicle here

class Car extends Vehicle {
    constructor(brand, model, condition = 100, age = 0) {
        super(brand, model, 300000, condition, age)
    }

    rent() {

        if(this.customers >= 0){
        const random = 15
        
          for(let i = 0; i < random; i++){
            const customer = new Customer()
            this.customers.push(customer)
          }
        }
      }
}

// Initialize a class CarCustomer from Customer here

class CarCustomer extends Customer {
    constructor(review){
        super(review)
    }
}

// Driver code.
let car = new Car ("VW", "Scirocco"); // create Instance from the vehicle above in a variable `Car`
car.age = 5
console.log('Car rental is open! :smile:');
do {
    car.increasingAge();
    car.rent();
    car.calculate();
    console.log(`[Age ${car.age} Report] Condition = ${car.condition}% | ${car.report}`);
    car.resetReport();
} while (car.condition > 0);

console.log('The car has met its end. :sad:');
