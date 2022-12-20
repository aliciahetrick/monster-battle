class Monster {
  constructor(name, hp, atk, def, move) {
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
    this.move = move
  }

  attack(otherMonster) {
    if (this.move.didHit() === false) {
      return `${this.name} missed!`
    } else {
      const damage = this.move.power * (this.atk / otherMonster.def)
      otherMonster.hp = otherMonster.hp - damage
      return `${this.name} used ${this.move.name} to deal ${damage} to ${otherMonster.name}!`
    }
  }

  render(imgSrc) {
    let monsterSection = document.createElement('section')
    let renderedMonsterImg = document.createElement('img')
    let renderedMonsterName = document.createElement('p')
    let renderedMonsterHp = document.createElement('p')
    renderedMonsterImg.src = imgSrc

    monsterSection.classList.add('monster-section')
    renderedMonsterImg.classList.add('monster-image')
    renderedMonsterName.classList.add('monster-name')
    renderedMonsterHp.classList.add('monster-hp')
    renderedMonsterName = this.name
    renderedMonsterHp = this.hp

    monsterSection.append(renderedMonsterName)
    monsterSection.append(renderedMonsterImg)
    monsterSection.append(renderedMonsterHp)

    return monsterSection
  }
}
class Toad extends Monster {
  constructor() {
    super('Toad', 2000, 50, 20, new Mushroomball())
  }
  render() {
    return super.render('toad.png')
  }
}
class Moth extends Monster {
  constructor() {
    super('Moth', 300, 15, 60, new Confusion())
  }
  render() {
    return super.render('moth.jpeg')
  }
}
class Bowser extends Monster {
  constructor() {
    super('Bowser', 2000, 80, 20, new Spikeball())
  }
  render() {
    return super.render('bowser.jpeg')
  }
}
class Frozone extends Monster {
  constructor() {
    super('Frozone', 100, 90, 100, new Iceball())
  }
  render() {
    return super.render('frozone.jpeg')
  }
}
///////////////////////////////////////

/* Write your Monster subclasses here! */
