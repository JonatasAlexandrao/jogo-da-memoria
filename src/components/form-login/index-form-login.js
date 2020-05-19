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
        // margin-top: 170px;
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
    const $userNameInput = inputCollabcode.render({
      type: 'text',
      placeholder: 'nome'})

    const $passwordLabel = labelCollabcode.render('Password')
    const $passwordInput = inputCollabcode.render({
      id: 'password',
      type: 'password',
      placeholder: '8 digite'
    })

    const $eyeCollabcode = eyeCollabcode.render({attrFor: "password"})

    const $linkCollab = linkCollab.render({
      href: "",
      content: "Forget password?"
    })

    const $btn = btnCollabcode.render({
      content: 'Login',
      path: 'game'
    })

    return `
      ${$userNameLabel}
      ${$userNameInput}

      ${$passwordLabel}
      ${$passwordInput}
      ${$eyeCollabcode}

      ${$linkCollab}

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