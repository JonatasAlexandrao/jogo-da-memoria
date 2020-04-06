

const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()
const $memoryCard = createMemoryCard(
    "img/icon-collabcode.png", 
    "Gueio mascote da CollabCode")


const $memoryCardFrontC = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-c.png" ,
    alt: "Ícone de um livro de C++"
})

const $memoryCardFrontJS = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-js.png" ,
    alt: "Ícone de um livro de JavaScript"
})

const $memoryCardFrontJava = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-Java.png" ,
    alt: "Ícone de um livro de Java"
})

const $memoryCardFrontWoman = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-woman.png" ,
    alt: "Ícone de um livro de C++"
})

/*
const $memoryCardFrontBug = createMemoryCard({
    src: "/img/icon-bug.png",
    alt: "Ícone de uma janela com um inseto", 
    nameClass: "-front"
})

const $memoryCardFrontCabeca = createMemoryCard({
    src: "/img/icon-cabeca.png",
    alt: "Ícone de uma cabeça com tag html",
    nameClass: "-front"
})
const $memoryCardFrontCelular = createMemoryCard({
    src: "/img/icon-celular.png", 
    alt: "Ícone de um Celular", 
    nameClass: "-front"
})*/

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJS)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontWoman)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontC)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJS)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontC)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontWoman)

$root.insertAdjacentElement('beforeend', $cardsWrapper)









