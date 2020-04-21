
(function() {

   const $root = document.querySelector('#root')

   const $cardsWrapper = createCardsWrapper()
   const createMemoryCard = memoryCard.create()

   const $pointBar = pointBar.create()
   const $layerStart = layerStart.render('Vai')
   

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

   /********************************* */
   

   $root.insertAdjacentHTML('afterbegin', $pointBar)
   $root.insertAdjacentElement('beforeend', $cardsWrapper)

   $root.insertAdjacentHTML('beforeend', $layerStart)


   //$root.insertAdjacentHTML('afterend', $transparencyLayer)


})()







