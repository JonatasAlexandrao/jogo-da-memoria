const inputCollabcode = (function(){

  const module = {}

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
    
      .input-collabcode {
        color: #3a4042;
        font-size: 18px;
        font-weight: bold;

        border-bottom: 2px solid rgba(58, 64, 66, .5);
        padding: 12px 0;

        width: 100%;

        display: block;
      }s

    `

    $head.insertAdjacentElement('beforeend', $style)
  }

  module._id = 0

  module.render = ({ id = "", placeholder = "", type = "text" }) => {

    module._style()
    module._id++

   //const $hiddenPassword = hiddenPassword.render()
   //${type == "password" ? $hiddenPassword : ""}
    return `
      <input 
        id="${id}"
        class="input-collabcode -${module._id}" 
        type="${type}"
        placeholder="${placeholder}">   
    `

  }

  

  return {
    render: module.render
  }

})()