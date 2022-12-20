/* Write your Move class here! */

class Move {
  constructor(name, power, accuracy) {
    this.name = name
    this.power = power
    this.accuracy = accuracy
  }

  didHit() {
    const probability = Math.random() <= this.accuracy ? true : false
    return probability
  }
}
class Mushroomball extends Move {
  constructor() {
    super('Mushroomball', 120, 0.76)
  }
}
class Confusion extends Move {
  constructor() {
    super('Confusion', 80, 1)
  }
}
class Spikeball extends Move {
  constructor() {
    super('Spikeball', 150, 0.4)
  }
}

class Iceball extends Move {
  constructor() {
    super('Iceball', 60, 0.8)
  }
}
