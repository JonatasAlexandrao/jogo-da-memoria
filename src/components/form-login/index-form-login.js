const formLogin = (function(){

  const module = {}

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .form-login{
        padding: 0 35px 40px 35px;
      }

      #root .input-collabcode + .btn-collabcode {
        margin-top: 170px;
      }

      /*.btnSubmit {
        width: 300px;
        height: 50px;
        border:none;
        border-radius: 24px;
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
      }*/

    `
    $head.insertAdjacentElement('beforeend', $style)
  }

  module._children = () => {

    const $userNameLabel = labelCollabcode.render('Username ou e-mail')
    const $userNameInput = inputCollabcode.render('text','nome')

    const $passwordLabel = labelCollabcode.render('Password')
    const $passwordInput = inputCollabcode.render('password','********')

    const $btn = btnCollabcode.render('Login')

    return `
      ${$userNameLabel}
      ${$userNameInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$btn}
    `
    
  }

  module.render = () => {
    module._style()

    return `<form class="form-login" action="" method="POST" >${module._children()}</form>`
  }


  return {
    render: module.render
  }

})()