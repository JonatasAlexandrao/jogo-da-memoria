
function createMemoryCard() {

    const $memoryCard = document.createElement("article")

    const $iconCollab = `
    <img 
        class = 'icon' 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da CollabCode'
    >`

    $memoryCard.classList.add("memory-card")
    $wrapCards.insertBefore($memoryCard, null)
    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab)
}

function createMemoryCardFront(){
    const $memoryCardFront = document.createElement('article')

    const $iconC = `
    <img 
        class = 'icon' 
        src='img/icon-c.png' 
        alt='Gueio mascote da CollabCode'
    >`

    $memoryCardFront.classList.add("memory-card", "-front")

    $wrapCards.insertBefore($memoryCardFront, null)

    $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC)
}