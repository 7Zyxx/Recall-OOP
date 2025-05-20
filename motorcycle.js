"use strict"
// import the parent class here

const {Vehicle, Customer} = require("./vehicle.js")

// Initialize a class Motorcycle from Vehicle here

class Motorcycle extends Vehicle {
    constructor(brand, model, condition = 100, age = 0, frameType = "Tubular Frame") {
        super(brand, model, 100000, condition, age, frameType)
        this.frameType = frameType
    }

    increasingAge() {

        const random = Math.floor(Math.random() * (40 - 10 + 1)) + 10
        this.condition -= random
    
        if(this.condition <= 0){
          this.condition = 0
        }
    
        if(this.condition > 0){
          this.age++
        }
    
      }
}

// Initialize a class MotorcycleCustomer from Customer here

class CarCustomer extends Customer {
    constructor(review){
        super(review)
    }
}

// Driver code.
let motorcycle = new Motorcycle ("Kawasakir", "ZX6R"); // create Instance from the vehicle above in a variable `Motorcycle`
motorcycle.condition = 95;
motorcycle.frameType = 'Double-Cradle Frame';
console.log('Motorcycle rental is open! :smile:');
do {
    motorcycle.increasingAge();
    motorcycle.rent();
    motorcycle.calculate();
    console.log(`[Age ${motorcycle.age} Report] Condition = ${motorcycle.condition}% | ${motorcycle.report}`);
    motorcycle.resetReport();
} while (motorcycle.condition > 0);

console.log('The motorcycle has met its end. :sad:');
