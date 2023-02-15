// Team Class - a class to store team name...
class Team {
    constructor(teamName) {
        this.teamName = teamName;
    }
}

// Starship Class - a classs that manage all ship's specifications and extends Team Class to identify Starship belongs to which team...
class Starship extends Team{
    constructor(teamName, shipName, numTorpedos, energyPerTorpedos, phaserBankCapacity, shieldEnergy) {
        super(teamName);
        this.shipName = shipName;
        this.numTorpedos = numTorpedos;
        this.energyPerTorpedos = energyPerTorpedos;
        this.phaserBankCapacity = phaserBankCapacity;
        this.shieldEnergy = shieldEnergy;
    }
}

// Team1 is Earth Starship have
// 1 - 30 Photon Torpedoes
// 2 - Each Torpedoes has 150 Mega Joules explosive
// 3 - Phaser Banks capable of delivering 100 Mega Joules of Energy
// 4 - Each Shield Generator is capable of withstanding 140 Mega Joules before collapsing


// Team Earth Starship has 10 Ships
let earth_starship_1 = new Starship('Earth Starship','Earth Starship 1', 30, 150, 100, 140);
let earth_starship_2 = new Starship('Earth Starship','Earth Starship 2', 30, 150, 100, 140);
let earth_starship_3 = new Starship('Earth Starship','Earth Starship 3', 30, 150, 100, 140);
let earth_starship_4 = new Starship('Earth Starship','Earth Starship 4', 30, 150, 100, 140);
let earth_starship_5 = new Starship('Earth Starship','Earth Starship 5', 30, 150, 100, 140);
let earth_starship_6 = new Starship('Earth Starship','Earth Starship 6', 30, 150, 100, 140);
let earth_starship_7 = new Starship('Earth Starship','Earth Starship 7', 30, 150, 100, 140);
let earth_starship_8 = new Starship('Earth Starship','Earth Starship 8', 30, 150, 100, 140);
let earth_starship_9 = new Starship('Earth Starship','Earth Starship 9', 30, 150, 100, 140);
let earth_starship_10 = new Starship('Earth Starship','Earth Starship 10', 30, 150, 100, 140);

// Team2 is Earth Starship have
// 1 - 50 Photon Torpedoes
// 2 - Each Torpedoes has 100 Mega Joules explosive
// 3 - Phaser Banks capable of delivering 60 Mega Joules of Energy
// 4 - Each Shield Generator is capable of withstanding 200 Mega Joules before collapsing

// Team Romulan Starship has 10 Ships
let romulan_starship_1 = new Starship('Romulan Starship', 'Romulan Starship 1', 50, 100, 60, 200);
let romulan_starship_2 = new Starship('Romulan Starship', 'Romulan Starship 2', 50, 100, 60, 200);
let romulan_starship_3 = new Starship('Romulan Starship', 'Romulan Starship 3', 50, 100, 60, 200);
let romulan_starship_4 = new Starship('Romulan Starship', 'Romulan Starship 4', 50, 100, 60, 200);
let romulan_starship_5 = new Starship('Romulan Starship', 'Romulan Starship 5', 50, 100, 60, 200);
let romulan_starship_6 = new Starship('Romulan Starship', 'Romulan Starship 6', 50, 100, 60, 200);
let romulan_starship_7 = new Starship('Romulan Starship', 'Romulan Starship 7', 50, 100, 60, 200);
let romulan_starship_8 = new Starship('Romulan Starship', 'Romulan Starship 8', 50, 100, 60, 200);
let romulan_starship_9 = new Starship('Romulan Starship', 'Romulan Starship 9', 50, 100, 60, 200);
let romulan_starship_10 = new Starship('Romulan Starship', 'Romulan Starship 10', 50, 100, 60, 200);


// Create 10 Ships on each side and put those objects into an Array (GIT COMMIT)
let earthStarship = [earth_starship_1, earth_starship_2, earth_starship_3, earth_starship_4, earth_starship_5, earth_starship_6, earth_starship_7, earth_starship_8, earth_starship_9, earth_starship_10];
let romulanStarship = [romulan_starship_1, romulan_starship_2, romulan_starship_3, romulan_starship_4, romulan_starship_5, romulan_starship_6, romulan_starship_7, romulan_starship_8, romulan_starship_9, romulan_starship_10];


// Battle management Algorithm:
class Battle {

    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    attack(attacker, defender) {
      // Calculate the damage
      const damage = Math.floor(Math.random() * attacker.energyPerTorpedos);
      // Apply the damage to the defender's health
      defender.shieldEnergy -= damage;
  
      // Log the attack
      console.log(` DAMAGE : ${attacker.shipName} attacked ${defender.shipName} for ${damage} damage.`);
  
      // Check if the defender is still alive
      if (defender.shieldEnergy <= 0) {
        console.log("------------------------------------------------------------Game Result------------------------------------------------------------");
        console.log(` RESULT  :  ${defender.shipName} has been defeated!`);

        // if defeated ship belongs to Romulan Starship remove defeated ship from the array 
        for (let i = 0; i < romulanStarship.length; i++) { 
            
            if (romulanStarship[i].shipName == defender.shipName) {
                // get index of defeated ship
                const index = romulanStarship.indexOf(defender);
                const x = romulanStarship.splice(index, 1);
            }
        }

        // if defeated ship belongs to Earth Starship remove defeated ship from the array 
        for (let i = 0; i < earthStarship.length; i++) { 
            
            if (earthStarship[i].shipName == defender.shipName) {
                // get index of defeated ship
                const index = earthStarship.indexOf(defender);
                const x = earthStarship.splice(index, 1);
            }
        }

      }

    }
  
    start() {
      console.log("------------------------------------------------------------Game Begins------------------------------------------------------------");
      // Loop until one of the players is defeated
      while (this.player1.shieldEnergy > 0 && this.player2.shieldEnergy > 0) {
        // Player 1 attacks Player 2
        this.attack(this.player1, this.player2);
  
        // Check if Player 2 is still alive
        if (this.player2.shieldEnergy > 0) {
          // Player 2 attacks Player 1
          this.attack(this.player2, this.player1);
        }
      }
  
      // Log the winner
      if (this.player1.shieldEnergy > 0) {
            console.log(` RESULT  : ${this.player1.shipName} wins!`);
        } else {
            console.log(` RESULT  : ${this.player2.shipName} wins!`);
        }

        // Log the remaining ship count from both team
        console.log(` REMAINS  :  Earth Starship has ${earthStarship.length} ships remaining.`);
        console.log(` REMAINS  :  Romulan Starship has ${romulanStarship.length} ships remaining.`);

      }
    
  }

  // To keep track of game round
  var round = 0;

// Continue Battle as long as all ships belongs to perticular team has been distroyed...
while (earthStarship.length > 0 && romulanStarship.length > 0) {
    round++;
    console.log(`***************************************************Round #${round}***************************************************`);
    console.log("--------------------Getting Random Ship from Team Earth Starship--------------------");
    let playerFromEarthStarship  = earthStarship[Math.floor(Math.random()*earthStarship.length)];
    console.log("Player 1 from Earth Starship => "+ playerFromEarthStarship.shipName);

    console.log("--------------------Getting Random Ship from Team Romulan Starship--------------------");
    let playerFromRomulanStarship  = romulanStarship[Math.floor(Math.random()*romulanStarship.length)];
    console.log("Player 2 from Romulan Starship => "+ playerFromRomulanStarship.shipName);
    
    const battle = new Battle(playerFromEarthStarship, playerFromRomulanStarship);
    battle.start();
    
}