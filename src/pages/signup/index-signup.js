

(function(){

  const $root = document.querySelector('#root')

  const $loginButton = flatButton.render('login')
  const $signupButton = flatButton.render('sign up', true)

 /*Desafio 39*/

  const $logoCollabcode = logoCollabcode.render()
  const $titleCollabcode = titleCollabcode.render('Wellcome!')

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode)

  const $labelCollabcode = labelCollabcode.render('E-mail')

  const $inputCollabcode = inputCollabcode.render()

  $root.insertAdjacentHTML('beforeend', $loginButton)
  $root.insertAdjacentHTML('beforeend', $signupButton)
  $root.insertAdjacentHTML('beforeend', $logoWrapper)

  $root.insertAdjacentHTML('beforeend', $labelCollabcode)

  $root.insertAdjacentHTML('beforeend', $inputCollabcode)


})()