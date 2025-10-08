window.addEventListener('DOMContentLoaded', async function () {
  const bodyContent = document.querySelector('#cl-body')
  const dateContainer = document.querySelector('#date')
  const company = document.querySelector('#company')
  const hiringManager = document.querySelector('#manager')
  const lang = new URLSearchParams(window.location.search).get('lang') || 'en'
  const { en, es } = await getData()

  const content = lang === 'es' ? es : en

  hiringManager.addEventListener('input', function () {
    const managerSpans = document.querySelectorAll('.manager')
    managerSpans.forEach(function (span) {
      span.innerText = hiringManager.innerText
    })
  })

  company.addEventListener('input', function () {
    const companySpans = document.querySelectorAll('.company')
    companySpans.forEach(function (span) {
      span.innerText = company.innerText
    })
  })


  const items = createItems(content)
  bodyContent.appendChild(items)

  const formattedDate = formatDate(new Date())
  dateContainer.innerText = formattedDate
})

async function getData() {
  const data = await fetch('/data/cover-letter.json')
  if (!data.ok) {
    throw new Error('Error: ' + data.status)
  }
  return data.json()
}

function createItems(elements) {
  const fragment = document.createDocumentFragment()
  elements.forEach(function (el) {
    const p = document.createElement('p')
    p.innerHTML = el
    fragment.appendChild(p)
  })
  return fragment
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}
