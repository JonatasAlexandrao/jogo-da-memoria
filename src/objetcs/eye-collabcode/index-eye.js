const eyeCollabcode = (function(){

const module = {}

module._style = () => {
  const $head = document.querySelector('head')
  const $style = document.createElement('style')

  $style.textContent = `
    .eye-collabcode {
      background-image: url(/img/hidden.png);
      background-repeat: no-repeat;
      backgound-position: center;
      cursor: pointer;
      text-indent: -9999px;
      display: block;
      width: 24px;
      height: 15px;
      opacity: .3;
      transition: opacity 200ms linear;
      float: right;
      transform: translateY(-180%);
      margin-right: 4px;
    }
    .eye-collabcode.-active {
      opacity: 1;
    }
  `
  $head.insertAdjacentElement('beforeend', $style)
}

module.handleClick = function($componet) {

  const attrFor = this.getAttribute("for")
  const $input = document.querySelector(`#${attrFor}`)
  
  if($input.getAttribute('type') === 'text'){
    this.classList.remove('-active')
    $input.setAttribute('type', 'password')    
  }else{
    this.classList.add('-active')
    $input.setAttribute('type', 'text')
  }

  /*$input.getAttribute('type') === 'text' 
    ? $input.setAttribute('type', 'password')
    : $input.setAttribute('type', 'text')*/

  

}

module.render = ({attrFor = ""}) => {
  module._style()

  return `<label 
            class="eye-collabcode"
            for="${attrFor}"
            onClick="eyeCollabcode.handleClick.bind(this)()">Mostrar senha
          </label>
  `
  /*<img class='hidden-password' src='img/hidden.png' alt='olho para tornar a senha visivel ou não' onClick=hiddenPassword.handleClick(this)></img>*/
}




return {
  render: module.render,
  handleClick: module.handleClick
}

})()