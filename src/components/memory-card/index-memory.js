

 function memoryCard() { 
 
   const $head = document.querySelector("head")
   const $style = document.createElement("style")

   $style.textContent = `
   .memory-card {
      width: 155px;
      height: 155px;
      background-color: rgb(242, 90, 113);
      border-radius: 30px;

      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      position: relative;

      cursor: pointer;

      /*Desafio 22
      margin:16px;*/


   }
   /*desafio 21*/
   .memory-card.-front{
      background-color: #fff;
   }
   /*desafio 21*/
   .memory-card.-front::before {
      content: "";
      position: absolute;
      width: 95px;
      height: 95px;

      background-color: rgb(212, 212, 212);
      border-radius: 50%;
   }

   .memory-card > .icon {   
      width: 100px;
      height: 100px;
   }

   .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
   }
   `

   $head.insertBefore($style, null)
   
   
   
   return ({ src, alt, nameClass }) => `
      <article class="memory-card ${nameClass}">
         <img 
               class = 'icon' 
               src= "${src}"
               alt="${alt}"
               onClick="handleClick()"
         />
      </article>`
   
 }
 



 






