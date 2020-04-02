

function createMemoryCard() {

    const $memoryCard = `
    <article class="memory-card">
        <img 
            class = 'icon' 
            src='img/icon-collabcode.png' 
            alt='Gueio mascote da CollabCode'
            onClick="handleClick()"
        />
    </article>`

    return $memoryCard

}

function createMemoryCardFront(){

    const $memoryCard = `
    <article class="memory-card -front">
        <img 
            class = 'icon' 
            src='img/icon-c.png' 
            alt='Gueio mascote da CollabCode'
            onClick="handleClick()"
        />
    </article>`

    return $memoryCard

}

function handleClick() {
    console.log('clicou!')

}