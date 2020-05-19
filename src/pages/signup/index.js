

const signup = (function(){

  const $root = document.querySelector('#root')

  const $loginButton = flatButton.render('login', false, "login")
  const $signupButton = flatButton.render('sign up', true, "signup")

  const $logoCollabcode = logoCollabcode.render()
  const $titleCollabcode = titleCollabcode.render('Wellcome!')

  const $formSignup = formSignup.render() 
 
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode)


  $root.insertAdjacentHTML('beforeend', $loginButton)
  $root.insertAdjacentHTML('beforeend', $signupButton)
  $root.insertAdjacentHTML('beforeend', $logoWrapper)

  $root.insertAdjacentHTML('beforeend', $formSignup)

})