class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Units extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost,power,resilience);
        this.power = power
        this.resilience = resilience
    }

    attack(target){
        target.resilience -= this.power
    }
}

class Effects extends Card{
    constructor(name,cost,text,type,magnitude){
        super(name,cost,text);
        this.text = text
        this.type = type
        this.magnitude = magnitude
    }

    play( target ){
        if( target instanceof Units ) {
            console.log("type of card: "+this.type)

            if(this.type === 'resilience'){    
                target.resilience += this.magnitude
            }else if(this.type === 'power'){
                target.power += this.magnitude
            }

            console.log(`${"Effect: "+this.text}`)
        } else {
            console.log("Sorry can't preform action")
        }
    }
}

//Effects cards
const hardAlgorithm = new Effects("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
const unhandledPromiseRejection = new Effects("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const pairProgramming = new Effects("Pair Programming",3,"increase target's power by 2","power",2)

// ===== PLAY =====
// 1.
console.log("");
console.log("------> Player 1 summons Red Belt Ninja <------");
console.log("------> El jugador 1 invoca a Ninja Cinturón Rojo <------");
const redBelt = new Units('Red Belt Ninja',3,3,4);

// 2.
console.log("");
console.log("------> Player 1 plays Hard Algorithm in Red Belt Ninja <------");
console.log("------> El jugador 1 juega Algoritmo difícil en Ninja Cinturón Rojo <------");
hardAlgorithm.play(redBelt)

// 3.
console.log("");
console.log("------> Player 1 summons Black Belt Ninja <------");
console.log("------> El jugador 2 invoca a Ninja Cinturón Negro <------");
const BlackBelt = new Units('Black Belt Ninja',4,5,4);

// 4.
console.log("");
console.log("------> Player 1 plays Unhandled Promise Rejection in Red Belt Ninja <------");
console.log("------> El jugador 2 juega Rechazo de promesa no controlada en Ninja Cinturón Rojo <------");
unhandledPromiseRejection.play(redBelt)

// 5.
console.log("");
console.log("------> Player 1 plays Pair Programming in Red Belt Ninja <------");
console.log("------> El jugador 1 juega Programación en pareja en Ninja Cinturón Rojo <------");
pairProgramming.play(redBelt)

// 6. 
console.log("");
console.log("------> Player 1 attacks with Red Belt Ninja on Black Belt Ninja <------");
console.log("------> El jugador 1 ataque con Ninja Cinturón Rojo a Ninja Cinturón Negro <------");
redBelt.attack(BlackBelt)