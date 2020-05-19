
const formSignup = (function(){

  const module = {}

  module._style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
    
    .form-signup{
      padding: 0 35px 40px 35px;
    }

    .btnSubmit {
      width: 300px;
      height: 50px;
      border:none;
      border-radius: 24px;
      background-color: #f25a70;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }

    `

    $head.insertAdjacentElement('beforeend', $style)
  }

  module._children = () => {
    const $userNameLabel = labelCollabcode.render('Username')
    const $userNameInput = inputCollabcode.render({
      placeholder: 'nome'
    })

    const $emailLabel = labelCollabcode.render('E-mail')
    const $emailInput = inputCollabcode.render({
      type: 'email',
      placeholder: 'example@email.com'
    })

    const $passwordLabel = labelCollabcode.render('Password')
    const $passwordInput = inputCollabcode.render({
      type: 'password',
      placeholder: '********'
    })

    const $confirmPasswordLabel = labelCollabcode.render('Confirm Password')
    const $confirmPasswordInput = inputCollabcode.render({
      type: 'password',
      placeholder: '********'
    })

    const $btn = btnCollabcode.render({
      content: 'Signup',
      path: 'login'
    })

    return `
    ${$userNameLabel}
    ${$userNameInput}

    ${$emailLabel}
    ${$emailInput}

    ${$passwordLabel}
    ${$passwordInput}

    ${$confirmPasswordLabel}
    ${$confirmPasswordInput}

    ${$btn}
    `
  }

  module.render = () => {

    module._style()

    return `<form class="form-signup" action="" method="POST" >${module._children()}</form>`
  }

  return {
    render: module.render
  }

})()