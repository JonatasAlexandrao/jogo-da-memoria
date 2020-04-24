

(function(){

  const $root = document.querySelector('#root')

  const $flatButton = flatButton.render()

  $root.insertAdjacentHTML('beforeend', $flatButton)
  console.log($root)

})()