const toad = new Toad()
const bowser = new Bowser()
const battle1 = new Battle(toad, bowser)
battle1.render()

let fightButton = document.querySelector('.fight')
fightButton.addEventListener('click', function () {
  // console.log(battle1.fight())
  if (battle1.battleOver) {
    return
  }
  const log = document.querySelector('.log')
  const li = document.createElement('li')
  li.textContent = battle1.fight()
  li.classList.add('fight-message')
  log.append(li)
})
