
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

    `

    $head.insertAdjacentElement('beforeend', $style)
  }

  module.handleClick = (event, path) => {
    event.preventDefault()
    window.location.hash = `#/${path}`
    location.reload(true)
  }

  module.render = ({content = "", path = ""}) => {

    module._style()

    return `<input 
      class="btn-collabcode" 
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