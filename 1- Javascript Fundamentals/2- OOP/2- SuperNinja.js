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
  
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const superSensei = new Sensei("Master Splinter");
console.log("<---------------------------------------------------------------->")
console.table(superSensei.showStats());
console.log("<---------------------------------------------------------------->")
superSensei.drinkSake();
console.log("<---------------------------------------------------------------->")
superSensei.speakWisdom();
console.log("<---------------------------------------------------------------->")
console.table(superSensei.showStats());
console.log("<---------------------------------------------------------------->")