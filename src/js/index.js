window.addEventListener('load', function () {
  const body = document.querySelector('body')
  const cvContainer = document.querySelector('#cv')
  const cvButton = document.querySelector('#btn-cv')

  cvButton.addEventListener('click', function () {
    cvContainer.classList.toggle('hide')
    body.classList.toggle('expanded')
  })

})