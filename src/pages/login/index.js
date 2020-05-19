const login = (function(){

  const $root = document.querySelector('#root')

  const $loginButton = flatButton.render('login', true, 'login')
  const $signupButton = flatButton.render('sign up', false, 'signup')

  const $logoCollabcode = logoCollabcode.render()
  const $titleCollabcode = titleCollabcode.render('Hello!')

  const $formLogin = formLogin.render() 
 
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode)


  $root.insertAdjacentHTML('beforeend', $loginButton)
  $root.insertAdjacentHTML('beforeend', $signupButton)
  $root.insertAdjacentHTML('beforeend', $logoWrapper)

  $root.insertAdjacentHTML('beforeend', $formLogin)




})