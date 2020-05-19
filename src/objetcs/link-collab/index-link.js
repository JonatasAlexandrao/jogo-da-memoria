const linkCollab = (function(){

  const module = {}

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .link-collab {
        color: #3a4042;
        text-decoration: none;
        font-size: 14px;
        opacity: .7;

        display: block;
        margin-top: 40px;
        margin-bottom: 60px;
        text-align: right;


      }
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
      type: 'password',
      placeholder: '********'
    })

    const $btn = btnCollabcode.render('Login')

    return `
      ${$userNameLabel}
      ${$userNameInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$btn}
    `
    
  }

  module.render = ({href, content}) => {
    module._style()

    return `<a class="link-collab" href= "${href}">${content}</a>`
  }


  return {
    render: module.render
  }

})()