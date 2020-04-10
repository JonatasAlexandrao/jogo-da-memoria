

 const $root = document.querySelector('#root')

 const $cardsWrapper = createCardsWrapper()
//const $styleMemoryCard = createStyleMemoryCard()

 const createMemoryCard = memoryCard()


 const $memoryCardFrontC = createMemoryCard({
    src: "img/icon-c.png" ,
    alt: "Ícone de um livro de C++"
 })

 const $memoryCardFrontJS = createMemoryCard({
    src: "img/icon-js.png" ,
    alt: "Ícone de um livro de JavaScript"
 })

 const $memoryCardFrontJava = createMemoryCard({
    src: "img/icon-Java.png" ,
    alt: "Ícone de um livro de Java"
 })

 const $memoryCardFrontWoman = createMemoryCard({
    src: "img/icon-woman.png" ,
    alt: "Ícone de um livro de C++"
 })
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJS)
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava)
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontWoman)
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontC)
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava)
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJS)
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontC)
 $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontWoman)

 /*---------------------
 const $memoryCardBack = createMemoryCard({
    src: "img/icon-collabcode.png", 
    alt: "Gueio mascote da CollabCode"})

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontC)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontC)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardBack)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardBack)

const memoryCard1 = $root.querySelector('.-front')
*/
  /*  
const $memoryCardFrontBug = createMemoryCard({
    src: "/img/icon-bug.png",
    alt: "Ícone de uma janela com um inseto", 
})

const $memoryCardFrontCabeca = createMemoryCard({
    src: "/img/icon-cabeca.png",
    alt: "Ícone de uma cabeça com tag html",
})
const $memoryCardFrontCelular = createMemoryCard({
    src: "/img/icon-celular.png", 
    alt: "Ícone de um Celular", 
})*/

 

 $root.insertAdjacentElement('beforeend', $cardsWrapper)
//$root.insertAdjacentElement('beforeend', $styleMemoryCard)









