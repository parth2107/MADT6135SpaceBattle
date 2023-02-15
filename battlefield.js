// Team Class - a class to store team name...
class Team {
    constructor(teamName) {
        this.teamName = teamName;
    }
}

// Starship Class - a classs that manage all ship's specifications and extends Team Class to identify Starship belongs to which team...
class Starship extends Team{
    constructor(teamName, numTorpedos, energyPerTorpedos, phaserBankCapacity, shieldEnergy) {
        super(teamName);
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
let earth_starship_1 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_2 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_3 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_4 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_5 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_6 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_7 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_8 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_9 = new Starship('Earth Starship', 30, 150, 100, 140);
let earth_starship_10 = new Starship('Earth Starship', 30, 150, 100, 140);

// Team2 is Earth Starship have
// 1 - 50 Photon Torpedoes
// 2 - Each Torpedoes has 100 Mega Joules explosive
// 3 - Phaser Banks capable of delivering 60 Mega Joules of Energy
// 4 - Each Shield Generator is capable of withstanding 200 Mega Joules before collapsing

// Team Romulan Starship has 10 Ships
let romulan_starship_1 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_2 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_3 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_4 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_5 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_6 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_7 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_8 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_9 = new Starship('Romulan Starship', 50, 100, 60, 200);
let romulan_starship_10 = new Starship('Romulan Starship', 50, 100, 60, 200);


// Create 10 Ships on each side and put those objects into an Array (GIT COMMIT)
let earthStarship = [earth_starship_1, earth_starship_2, earth_starship_3, earth_starship_4, earth_starship_5, earth_starship_6, earth_starship_7, earth_starship_8, earth_starship_9, earth_starship_10];
let romulanStarship = [romulan_starship_1, romulan_starship_2, romulan_starship_3, romulan_starship_4, romulan_starship_5, romulan_starship_6, romulan_starship_7, romulan_starship_8, romulan_starship_9, romulan_starship_10];