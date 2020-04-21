const transparencyLayer = (function(){

  const module = {}

  module._style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `  
    .transparency-layer {

      width: 100vw;
      height: 100vh;
      position: absolute;
  
      background-color: rgba(0, 0, 0, 0.6);
  
      top: 0;
  
    }

    /*.transparency-layer.-disappear{
      display:none;
    }*/
    `
    $head.insertBefore($style, null)

  }

  module.render = () => {

    module._style()

    return `
    <div class="transparency-layer"></div>
    `
  }

  return {
    render: module.render
  }


})()