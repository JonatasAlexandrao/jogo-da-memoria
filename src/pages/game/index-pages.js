
(function() {

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

   $root.insertAdjacentElement('beforeend', $cardsWrapper)
   //$root.insertAdjacentElement('beforeend', $styleMemoryCard)

})()







