const gameButton = (function() {

  const module = {}

  module._style = () => {

    const $head = document.querySelector("head")
    const $style = document.createElement("style")


    $style.textContent = `
    
      // .btnStart {
      //   width: 150px;
      //   height: 40px;
      //   border-radius: 15px;
      //   text-transform: uppercase;
      //   border: 3px solid  #3a4047;
      //   font-weight: bold;
    
      //   position: fixed;
      //   bottom: 0;
      //   left: 50%;
      //   transform: translateY(-50%) //translateX(-50%);
      //   cursor: pointer;
      // }
    
      // .btnStart:hover {
      //     background-color: #3a4047;
      //     color: #fff;
      // }

    .game-button {
      width: 100px;
      height: 100px;

      border-radius: 50%;
      text-transform: uppercase;
      border: 3px solid  #fffcee;
      font-weight: bold;
      font-size: 1.05em;
      cursor: pointer;
      background-color: #2ed573;
      color: #fffcee;
      box-shadow: 0px 4px 8px #3a4042;


      position:absolute;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%)
      

    }

    .game-button:hover {
      background-color: #be3b4f;
      color: #fff;
    }


      `

    $head.insertBefore($style, null)



  }


  module.render = () => {
    module._style()

    return `
    <button class="game-button">start</button>
    `
  }

  return {
    render: module.render
  }


})()