
const memoryCard = (function() {

   const module = {}

   module.create = () => { 

      const $head = document.querySelector("head")
      const $style = document.createElement("style")
   
      $style.textContent = `
   
      .memory-card {
         width: 155px;
         height: 155px;
         position: relative;
      }
   
   
      .memory-card .card {
         width: 100%;
         height: 100%;
         background-color: rgb(242, 90, 113);
         border-radius: 30px;
   
         display: flex;
         justify-content: center;
         align-items: center;
   
         box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
         position: relative;
   
         cursor: pointer;
         position: absolute;
      }
   
      .memory-card.-active .card,
      .memory-card.-score .card{
         display: none;
      }
   
      .memory-card.-active .card.-front,
      .memory-card.-active .card.-front{
         display: flex;
      }
   
      .memory-card .card.-front{
         background-color: #fff;
         display: flex;
      }
   
      .memory-card .card.-front::before {
         content: "";
         position: absolute;
         width: 95px;
         height: 95px;
   
         background-color: rgb(212, 212, 212);
         border-radius: 50%;
      }
   
      .memory-card .card > .icon {   
         width: 100px;
         height: 100px;
      }
   
      .memory-card .card.-front > .icon {
         position: absolute;
         transform: translateY(-12px);
      }
      
      `
   
      $head.insertBefore($style, null)
   
   
   
      return ({ src, alt }) => `
         <div class="memory-card" onClick="memoryCard.handleClick(this)">
            <article class="card -front">
               <img 
                     class = 'icon' 
                     src= "${src}"
                     alt="${alt}"
               />
            </article>
   
            <article class="card">
               <img 
                     class = 'icon' 
                     src= "img/icon-collabcode.png"
                     alt="Gueio mascote da CollabCode"
               />
            </article>
         </div>`
   
   },

   module.handleClick = $component => {

      if (!$component.classList.contains('-active')){
   
         module._activeMemoryCard($component)
   
         module._checkSure()
   
      }
   
   }

   module._activeMemoryCard = ($component) => {
      if(qtdActiveMemoryCard < 2){
         $component.classList.add("-active")
      }
   }

   module._checkSure = () => {
   if(qtdActiveMemoryCard == 1){

      const $activeMemoryCard = document.querySelectorAll(".memory-card.-active")
      

      if($activeMemoryCard[0].querySelector('.-front .icon').getAttribute('src') == $activeMemoryCard[1].querySelector('.-front .icon').getAttribute('src')){

         //Atualiza a pontuaçao na tela
         store.score++
         document.querySelector(".point-bar > .number").textContent = store.score;

         $activeMemoryCard.forEach($memoryCard => {
            $memoryCard.classList.add('-score')
            $memoryCard.classList.remove('-active')
         })
         //console.log("score: " + store.score)
      }
      else {
         setTimeout(() => {
            
         
            $activeMemoryCard.forEach($memoryCard => {
               $memoryCard.classList.remove("-active")
            })

         qtdActiveMemoryCard = 0;
         }, 1500)
      }
   }

   }

   return {
      //create,//create: create,
      //handleClick//handleClick: handleClick
      create: module.create,
      handleClick: module.handleClick
   }

})()






