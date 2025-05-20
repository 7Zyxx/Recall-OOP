"use strict"

class Vehicle {
  #condition
  constructor(brand, model, price, condition = 100, age = 0) {
    this.brand = brand
    this.model = model
    this.price = price
    this.#condition = condition
    this.age = age
    this.customers = []
    this.totalRentDays = 0
    this.totalRentCost = 0
  }

  get condition(){
    return this.#condition
  }

  set condition(value){
    this.#condition = value
  }

  increasingAge() {

    if(this.#condition > 0){
      const random = Math.floor(Math.random() * 30) + 1
      this.#condition -= random
      this.age++
      
      if(this.#condition <= 0){
        this.#condition = 0
      }
    }
      
  }

  rent() {

    if(this.customers >= 0){
    const random = Math.floor(Math.random() * (20 - 5 + 1)) + 5
    
      for(let i = 0; i < random; i++){
        const customer = new Customer()
        this.customers.push(customer)
      }
    }
      
  }

  calculate() {

    this.totalRentDays = this.customers.length
    this.totalRentCost = this.price * this.totalRentDays

  }
  
  get report (){
    
    let totalGood = 0
    let totalBad = 0

    for(let i = 0; i < this.customers.length; i++){
      // console.log(this.customers[i].review);
      
      if(this.customers[i].review == "good"){
        totalGood++
      }
      
      else{
        totalBad++
      }
    }

    return `total rent days: ${this.totalRentDays}, total rent cost: ${this.totalRentCost}, reviews: ${this.customers.length} (${totalGood} good, ${totalBad}} bad)`

  }
      

  resetReport() {

    this.customers = []
    this.totalRentDays = 0
    this.totalRentCost = 0
      
  }
}

class Customer {
  constructor() {
    this.review = this.randomRev()
  }

  randomRev(){

    const random = Math.floor(Math.random() * 4)

    if(random === 0){
      this.review = "bad"
    
    }else{
      this.review = "good"
    }
  }
}

// Driver code
const vehicle = new Vehicle("Toyota", "Camry", 200000); // vehicle instance
console.log(vehicle);
/* 
Vehicle {
  brand: 'Toyota',
  model: 'Camry',
  price: 200000,
  age: 0,
  customers: [],
  totalRentDays: 0,
  totalRentCost: 0
}
*/

// export the Parent Class here

module.exports = {Vehicle, Customer}