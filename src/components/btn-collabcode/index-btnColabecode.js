
const btnCollabcode = (function(){

  const module = {}

  module._style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `

    .btn-collabcode {
      width: 100%;
      height: 50px;
      border:none;
      border-radius: 24px;
      background-color: #f25a70;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      text-transform:uppercase;
    }

    .input-collabcode + .btn-collabcode {
      margin-top: 45px;
    }

    .btn-collabcode.-voltar {
      border-radius: 0;
      background-color: grey;
    }

    `

    $head.insertAdjacentElement('beforeend', $style)
  }

  module.handleClick = (event, path) => {

    validateField.validate()
    console.log('menos de 8 digitos')

    event.preventDefault()
    window.location.hash = `#/${path}`
    location.reload(true)
  }

  module.render = ({content = "", path = "", classe = ""}) => {

    module._style()

    return `<input 
      class="btn-collabcode ${classe}" 
      type="submit" 
      value=${content}
      onClick="btnCollabcode.handleClick(event, '${path}')">
    </input>`
  }

  

  return {
    render: module.render,
    handleClick: module.handleClick
  }

})()