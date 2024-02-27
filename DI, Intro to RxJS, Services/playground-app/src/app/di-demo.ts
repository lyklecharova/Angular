class Wallet {
  balance = 0;
  constructor(balance: number) {
    this.balance = balance;
  }
}

class Car {
  model: string;
  color: string;
  constructor(model: string, color: string) {
    this.model = model;
    this.color = color;
  }
}
// BAD WAY!!!
class Person {
  wallet: Wallet;
  car: Car;
  constructor(balance: number, model: string, color: string) {
    this.wallet = new Wallet(balance);
    this.car = new Car(model, color);
  }
}
// BEETER WAY!!!
class PersonOptimized {
  walllet: Wallet;
  car: Car;

  constructor(wallet: Wallet, car: Car) {
    this.car = car;
    this.walllet = wallet;
  }
}

const mariasWallet = new Wallet(1000);
const mariasCar = new Car('Audi', 'white');

const mariaPerson = new PersonOptimized(mariasWallet, mariasCar);
console.log(mariaPerson);
