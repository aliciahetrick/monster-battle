/* Write your Battle class here! */
class Battle {
  constructor(player, opponent) {
    this.player = player
    this.opponent = opponent
    this.battleOver = false
  }
  checkWin() {
    if (this.player.hp > 0 && this.opponent.hp <= 0) {
      return `${this.player.name} wins!`
    } else if (this.opponent.hp > 0 && this.player.hp <= 0) {
      return `${this.opponent.name} wins!`
    } else if (this.player.hp <= 0 && this.opponent.hp <= 0) {
      return 'Both monsters lose!'
    } else if (this.player.hp > 0 && this.opponent.hp > 0) {
      return 'Keep fighting'
    }
  }

  fight() {
    const playerMessage = this.player.attack(this.opponent)
    const opponentMessage = this.opponent.attack(this.player)

    const checkWin = this.checkWin()
    let playerWin = this.player.hp > 0 && this.opponent.hp <= 0
    let opponentWin = this.opponent.hp > 0 && this.player.hp <= 0
    if (playerWin || opponentWin) {
      this.battleOver = true
    }
    return `${playerMessage} ${opponentMessage} ${checkWin}`
  }

  renderMonster(party) {
    const section = document.querySelector(`section.${party}`)
    const element = this[party].render()
    section.replaceChildren(element)
  }

  render() {
    this.renderMonster('player')
    this.renderMonster('opponent')
  }
}
