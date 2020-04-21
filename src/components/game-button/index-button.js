const gameButton = (function() {

  const module = {}

  module._style = () => {

    const $head = document.querySelector("head")
    const $style = document.createElement("style")


    $style.textContent = `

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
      transform: translateX(-50%);
      
      z-index: 1;

    }

    .game-button:hover {
      background-color: #be3b4f;
      color: #fff;
    }

    /*.game-button.-disappear{
      display:none;
    }*/

    `

    $head.insertBefore($style, null)



  }


  module.render = content => {
    module._style()

    return `
    <button class="game-button">${content}</button>
    `
  }

  module.handleClick = ($component) => {

    

    // $component.classList.add('-disappear')  
    // $transparencyLayer.classList.add('-disappear')

    $component.remove()
    document.querySelector('.transparency-layer').remove()
    

  }

  return {
    render: module.render,
    handleClick: module.handleClick
  }


})()