window.addEventListener('load', function () {
  const cvContainer = document.querySelector('main')
  const cvButton = document.querySelector('#btn-cv')

  cvButton.addEventListener('click', function () {
    cvContainer.classList.toggle('hide')
    body.classList.toggle('expanded')
  })

})