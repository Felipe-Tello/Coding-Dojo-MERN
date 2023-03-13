class Ninja {
    constructor(name) {
      this.name = name;
      this.health = 10;
      this.speed = 3;
      this.strength = 3;
    }
  
    sayName() {
      console.log(`My name is ${this.name}!!!`);
    }
  
    showStats() {
      return {
        Name: this.name,
        Strength: this.strength,
        Speed: this.speed,
        Health: this.health
      };
    }
  
    drinkSake() {
      this.health += 10;
      console.log(`${this.name} drank sake and increased his health by 10.`);
    }
  }
  
  const ninja1 = new Ninja("Hyabusa");
  console.log("<---------------------------------------------------------------->")
  ninja1.sayName();
  console.log("<---------------------------------------------------------------->")
  console.table(ninja1.showStats());
  console.log("<---------------------------------------------------------------->")
  ninja1.drinkSake();
  console.log("<---------------------------------------------------------------->")
  console.table(ninja1.showStats());
  console.log("<---------------------------------------------------------------->")
  module.exports = Ninja;