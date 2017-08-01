class Player {
  constructor(name, speed, strength) {
    this.name = name;
    this.speed = speed;
    this.strength = strength;
    this.score = (speed + strength);
    this.starter = 0;
  }

  makeStarter() {
    this.starter = 1;
  }
}

export default Player;
